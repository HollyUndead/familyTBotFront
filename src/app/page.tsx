"use client";

import { useAuth } from "@/components/auth/auth-context";
import getMyUser from "@/functions/backrequest";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
import style from "./page.module.scss";

export default function Home() {
  const user = useAuth();
  // const router = useRouter();

  function authincate() {
    console.log("button clicked");
    const newUser = getMyUser();
    user.setUser(newUser);
    // router.push("/tasks");
  }
  return (
    <main className="homePage">
      <button onClick={authincate} className={style.mainButton}>
        Sign in
      </button>
      <p role="status">{user.user ? "Signed in" : "Not signed in"}</p>
    </main>
  );
}
