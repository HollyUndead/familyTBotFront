"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type User = {
  userId: number;
  userName: string;
  assignedTasks: unknown[];
  completedTasks: unknown[];
  overdueTasks: unknown[];
  starHistory: unknown[];
  authOnWeb: boolean;
};

type AuthContextValue = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);
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
  // console.log("context:", context.user);

  return context;
}
