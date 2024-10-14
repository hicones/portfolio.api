export function formatResponse<T>(
  payload: T,
  status: number,
  message?: string
) {
  return {
    status,
    payload,
    message,
  };
}
