const backBaseUrl = "https://wireless-kiln-departure.ngrok-free.dev/api";

export async function getMyUser(signal?: AbortSignal) {
  const response = await fetch(`${backBaseUrl}/telegramauth/me`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch user (HTTP ${response.status})`);
  }

  return response.json();
}

export async function getAllUsers(signal?: AbortSignal) {
  const response = await fetch(`${backBaseUrl}/telegramauth/users`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch user (HTTP ${response.status})`);
  }

  return response.json();
}

export function logOut() {
  sessionStorage.removeItem("token");
}

export function authincate() {
  window.location.assign(`${backBaseUrl}/telegramauth/authenticate`);
}

const backendActions = { getMyUser, getAllUsers, authincate };

export default backendActions;
