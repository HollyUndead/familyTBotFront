"use client";

import { Suspense, useEffect, type ReactNode } from "react";
import { AuthProvider, useAuth } from "@/components/auth/auth-context";
import Sidebar from "@/components/sidebar/sidebar";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <Sidebar />
      <Suspense fallback={<div aria-busy="true">Loading...</div>}>
        {children}
      </Suspense>
    </AuthProvider>
  );
}
