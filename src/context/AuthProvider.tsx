import React, { createContext, useContext, useMemo, useState } from 'react';

type Role = 'principale' | 'teacher' | 'parent' | 'student';

type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

type AuthContextValue = {
  user: AuthUser | null;
  token: string | null;
  role: Role;
  signin: (args: { email: string; password: string; role: Role }) => Promise<boolean>;
  signout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function mapRoleToRoute(role: Role) {
  if (role === 'principale') return 'dashboard';
  return role;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));
  const [role, setRole] = useState<Role>(() => (localStorage.getItem('role') as Role) || 'principale');
  const [user, setUser] = useState<AuthUser | null>(() => {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  });

  async function signin({ email, password, role }: { email: string; password: string; role: Role }): Promise<boolean> {
    const url = (import.meta as any).env?.VITE_API_URL || 'http://localhost:4001/graphql';
    const q = `mutation($role: Role!, $email: String!, $password: String!) { login(role: $role, email: $email, password: $password) { role user { id name email role } token } }`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: q, variables: { role: role.toUpperCase(), email, password } })
    });
    const data = await res.json();
    const payload = data?.data?.login;
    if (!payload) return false;
    const r: Role = payload.role.toLowerCase();
    const u: AuthUser = { id: payload.user.id, name: payload.user.name, email: payload.user.email, role: r };
    localStorage.setItem('token', payload.token);
    localStorage.setItem('role', r);
    localStorage.setItem('user', JSON.stringify(u));
    setToken(payload.token);
    setRole(r);
    setUser(u);
    window.location.hash = mapRoleToRoute(r);
    return true;
  }

  function signout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    setToken(null);
    setRole('principale');
    setUser(null);
    window.location.hash = 'signin';
  }

  const value = useMemo<AuthContextValue>(() => ({ user, token, role, signin, signout }), [user, token, role]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('AuthContext');
  return ctx;
}