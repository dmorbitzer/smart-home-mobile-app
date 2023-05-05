export default function useLogin() {
  return async function (apiUrl, username, password) {
    const response = await fetch(`http://${apiUrl}:8080/api/login_check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    return response;
  };
}
