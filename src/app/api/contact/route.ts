export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json().catch(() => ({}));
    // In real app, send email or persist. For now, accept payload.
    return Response.json({ ok: true }, { status: 200 });
  } catch (e) {
    return Response.json({ error: 'Invalid payload' }, { status: 400 });
  }
}


