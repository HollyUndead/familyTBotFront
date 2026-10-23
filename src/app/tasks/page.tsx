"use client";

import { useAuth } from "@/components/auth/auth-context";
import { getMyUser } from "@/functions/backrequest";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TasksPage() {
  const { user, setUser } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (user !== null) return;
    const params = new URLSearchParams(window.location.hash.slice(1));
    const tokenParam = params.get("token");
    console.log("tokenParam:", tokenParam);

    if (tokenParam) {
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
      {error && <p role="alert">Could not load your account: {error}</p>}
      {user !== null && <p>{(user as { userName?: string }).userName}</p>}
    </main>
  );
}
