var worker_default = {
  async fetch(request, env) {
    if (!env.PROXY) {
      return new Response(JSON.stringify({ error: "ai_proxy_unbound" }), {
        status: 503,
        headers: { "Content-Type": "application/json" }
      });
    }
    const url = new URL(request.url);
    const target = new Request(`https://ai-proxy${url.pathname}${url.search}`, request);
    return env.PROXY.fetch(target);
  }
};
