export const handleJSONResponse = async (promise: Promise<Response>) => {
  const response = (await promise).json();
  return response;
};

export const callAPI = async (url: string, method: string, body?: unknown) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
  });
};
