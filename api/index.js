// Vercel serverless wrapper that adapts the bundled Start server to Node request/response
async function getServer() {
  // Try bundled server first (from build). If missing, fall back to package server-entry.
  try {
    const { default: serverModule } = await import('../dist/server/server.js');
    return serverModule?.default ?? serverModule;
  } catch (err) {
    console.warn('Bundled server not found, falling back to @tanstack/react-start/server-entry', err?.message);
    const m = await import('@tanstack/react-start/server-entry');
    return (m.default ?? m);
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
    console.error(err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
