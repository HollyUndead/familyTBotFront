"use client";

import { useAuth } from "@/components/auth/auth-context";
import { getMyUser } from "@/functions/backrequest";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./tasks.module.scss";

export default function TasksPage() {
  const { user, setUser } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  function sendRequet() {
    const controller = new AbortController();
    getMyUser(controller.signal)
      .then(setUser)
      .catch((requestError: unknown) => {
        if (!controller.signal.aborted && requestError instanceof Error) {
          setError(requestError.message);
        }
      });
  }

  useEffect(() => {
    // if (user !== null) return;
    const params = new URLSearchParams(window.location.hash.slice(1));
    const tokenParam = params.get("token");
    console.log("tokenParam:", tokenParam);

    if (tokenParam && !sessionStorage.getItem("token")) {
      sessionStorage.setItem("token", tokenParam);
      // console.log("replace");
      router.replace("/tasks");
    }
    const controller = new AbortController();
    getMyUser(controller.signal)
      .then(setUser)
      .catch((requestError: unknown) => {
        if (!controller.signal.aborted && requestError instanceof Error) {
          setError(requestError.message);
        }
      });

    return () => controller.abort();
  }, [setUser]);

  return (
    <main>
      <h1>Tasks Page</h1>
      <button className={styles.testButton} onClick={sendRequet}>
        Send request to /me
      </button>
      {error && <p role="alert">Could not load your account: {error}</p>}
      {user !== null && <p>{(user as { userName?: string }).userName}</p>}
    </main>
  );
}
