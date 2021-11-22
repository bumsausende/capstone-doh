export default async function apiClient(method, url, body = null, params = {}) {
  const queryParams = new URLSearchParams(params).toString();

  try {
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    }

    if (body) {
      config.body = JSON.stringify(body);
    }

    let prefix = '';
    // if running on server
    if (typeof window === 'undefined') {
      prefix = process.env.API_URL;
    }

    const response = await fetch(`${prefix}/api/${url}?${queryParams}`, config);

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

export async function get(url, body, params = {}) {
  return await apiClient('GET', url, body, params);
}

export async function post(url, body, params = {}) {
  return await apiClient('POST', url, body, params);
}

export async function put(url, body, params = {}) {
  return await apiClient('PUT', url, body, params);
}

export async function remove(url, body, params = {}) {
  return await apiClient('DELETE', url, body, params);
}
