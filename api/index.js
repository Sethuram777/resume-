// Vercel serverless wrapper that adapts the bundled Start server to Node request/response
async function getServer() {
  // Prefer the server copied into the api folder at build time (api/dist-server).
  // This ensures Vercel packages the server bundle with the function.
  try {
    const { default: serverModule } = await import('./dist-server/server.js');
    return serverModule?.default ?? serverModule;
  } catch (firstErr) {
    console.warn('api/dist-server not found, trying ../dist/server/server.js', firstErr?.message);
    try {
      const { default: serverModule } = await import('../dist/server/server.js');
      return serverModule?.default ?? serverModule;
    } catch (secondErr) {
      console.warn('dist/server not found, falling back to @tanstack/react-start/server-entry', secondErr?.message);
      const m = await import('@tanstack/react-start/server-entry');
      return (m.default ?? m);
    }
  }
}

export default async function handler(req, res) {
  try {
    const serverModule = await getServer();
    const server = serverModule?.default ?? serverModule;

    const url = new URL(req.url, `https://${req.headers.host}`);
    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers || {})) {
      if (v !== undefined) headers.set(k, Array.isArray(v) ? v.join(',') : String(v));
    }

    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = chunks.length ? Buffer.concat(chunks) : undefined;

    const request = new Request(url.toString(), {
      method: req.method,
      headers,
      body,
    });

    const response = await server.fetch(request, undefined, undefined);

    res.statusCode = response.status;
    response.headers.forEach((v, k) => res.setHeader(k, v));
    const arrayBuffer = await response.arrayBuffer();
    res.end(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error('Handler error:', err?.stack ?? err?.message ?? err);
    res.statusCode = 500;
    // Return JSON with error message and stack to surface runtime issue in Vercel logs.
    try {
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify({ status: 500, unhandled: true, message: err?.message, stack: err?.stack }));
    } catch (e) {
      res.end('Internal Server Error');
    }
  }
}
