const UMAMI_HOST = "cloud.umami.is";

const ALLOWED_PATHS = ["/script.js", "/api/send"];

export default {
  async fetch(req: Request): Promise<Response> {
    const url = new URL(req.url);
    const pathname = url.pathname;

    const prefix = "/umami";
    const upstreamPath = pathname.startsWith(prefix)
      ? pathname.slice(prefix.length) || "/"
      : pathname;

    if (!ALLOWED_PATHS.includes(upstreamPath)) {
      return new Response("Not found", { status: 404 });
    }

    const upstreamUrl = `https://${UMAMI_HOST}${upstreamPath}${url.search}`;

    const headers = new Headers(req.headers);
    headers.set("host", UMAMI_HOST);
    const cfIp = headers.get("cf-connecting-ip");
    if (cfIp) {
      headers.set("x-forwarded-for", cfIp);
    }
    headers.delete("cf-connecting-ip");
    headers.delete("cf-visitor");
    headers.delete("cf-ray");

    if (upstreamPath === "/script.js") {
      const cached = await caches.default.match(url);
      if (cached) return cached;
    }

    const resp = await fetch(upstreamUrl, {
      method: req.method,
      headers,
      body: req.method === "GET" || req.method === "HEAD" ? undefined : req.body,
      redirect: "manual",
    });

    if (upstreamPath === "/script.js") {
      const cloned = new Response(resp.body, resp);
      cloned.headers.set("cache-control", "public, max-age=3600");
      cloned.headers.set("access-control-allow-origin", "*");
      return cloned;
    }

    const cors = new Response(resp.body, resp);
    cors.headers.set("access-control-allow-origin", "*");
    return cors;
  },
};
