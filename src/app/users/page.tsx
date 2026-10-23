"use client";

import { getAllUsers } from "@/functions/backrequest";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [error, setError] = useState<string | undefined>();
  const [users, setUsers] = useState<string | null>();
  useEffect(() => {
    const controller = new AbortController();
    getAllUsers(controller.signal)
      .then(setUsers)
      .catch((requestError: unknown) => {
        if (!controller.signal.aborted && requestError instanceof Error) {
          setError(requestError.message);
        }
      });
  }, []);
  return (
    <div>
      Users Page
      {error && <p role="alert">Could not load your account: {error}</p>}
      {users !== null && <p>{JSON.stringify(users)}</p>}
    </div>
  );
}
