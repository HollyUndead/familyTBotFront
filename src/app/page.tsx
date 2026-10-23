"use client";

import { useAuth } from "@/components/auth/auth-context";
import style from "./page.module.scss";
import { authincate } from "@/functions/backrequest";

export default function Home() {
  const user = useAuth();

  return (
    <main className="homePage">
      <button onClick={authincate} className={style.mainButton}>
        Sign in
      </button>
      <p role="status">{user.user ? "Signed in" : "Not signed in"}</p>
    </main>
  );
}
