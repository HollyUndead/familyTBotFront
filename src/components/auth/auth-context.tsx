"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

// type User = {
//   id: string;
//   name: string;
//   email: string;
// };

type AuthContextValue = {
  user: unknown;
  setUser: (user: unknown) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<unknown>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
