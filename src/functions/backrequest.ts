export default async function getMyUser() {
  console.log("startFetch");

  const res = await fetch(
    "https://wireless-kiln-departure.ngrok-free.dev/api/telegramauth/authenticate",
  );
  if (!res.ok) throw new Error("failed to fetch");
  const user = await res.json();
  console.log("user:", user);

  return user;
}
