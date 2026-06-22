// Vercel serverless wrapper that adapts the bundled Start server to Node request/response
export default async function handler(req, res) {
  try {
    const { default: serverModule } = await import('../dist/server/server.js');
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
