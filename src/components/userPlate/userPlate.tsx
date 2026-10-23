"use client";

import { useAuth } from "../auth/auth-context";

export default function UserPlate() {
  const { user } = useAuth();
  return (
    <div>
      {user?.avatarUrl && <img src={user.avatarUrl} alt="" />}
      {user?.userName}
    </div>
  );
}
