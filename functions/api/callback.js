export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Decap-CMS-OAuth'
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code
      })
    });

    const data = await response.json();
    const token = data.access_token;
    const content = token
      ? `window.opener.postMessage('authorization:github:success:${JSON.stringify({ token, provider: 'github' })}', '*'); window.close();`
      : `window.opener.postMessage('authorization:github:error:${JSON.stringify(data)}', '*'); window.close();`;

    return new Response(`<!DOCTYPE html><html><body><script>${content}</script></body></html>`, {
      headers: { 'Content-Type': 'text/html' }
    });
  } catch (err) {
    return new Response(`Authentication failed: ${err.message}`, { status: 500 });
  }
}
