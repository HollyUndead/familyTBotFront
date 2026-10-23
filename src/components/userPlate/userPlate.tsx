"use client";

import { useAuth } from "../auth/auth-context";

export default function UserPlate() {
  const { user } = useAuth();
  return <div>{user?.userName}</div>;
}
