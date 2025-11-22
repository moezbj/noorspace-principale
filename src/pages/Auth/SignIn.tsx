import React from 'react';
import { useAuth } from '../../context/AuthProvider';

export default function SignIn() {
  const { signin } = useAuth();
  const [role, setRole] = React.useState<'principale' | 'teacher' | 'parent' | 'student'>('principale');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);
  async function onSignIn() {
    const ok = await signin({ email, password, role });
    if (!ok) setError('Invalid credentials');
  }
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(66deg, rgba(233,230,206,1) 3%, rgba(237,127,88,1) 88%)' }}>
      <div className="w-full max-w-md bg-white border border-ns-border rounded-[20px] [box-shadow:0_10px_20px_rgba(0,0,0,0.06)]">
        <div className="px-8 pt-8 pb-6 text-center">
          <div className="mx-auto w-12 h-12 rounded-md bg-black/5 flex items-center justify-center text-gray-800 font-bold">N</div>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight">Sign in</h1>
          <p className="mt-1 text-sm text-ns-muted">Welcome back to Noorspace</p>
        </div>
        <div className="px-8 pb-8 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full rounded-[8px] border border-ns-border bg-white px-3 py-2 text-sm" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full rounded-[8px] border border-ns-border bg-white px-3 py-2 text-sm" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Role</label>
            <select
              className="w-full rounded-[8px] border border-ns-border bg-white px-3 py-2 text-sm"
              value={role}
              onChange={e => setRole(e.target.value as any)}
            >
              <option value="principale">Principale</option>
              <option value="teacher">Teacher</option>
              <option value="parent">Parent</option>
              <option value="student">Student</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-xs text-gray-700">
              <input type="checkbox" className="rounded border border-ns-border" />
              Remember me
            </label>
            <a href="#forgot" className="text-xs text-gray-700 hover:underline">Forgot password?</a>
          </div>
          <button onClick={onSignIn} className="w-full mt-2 px-3 py-2 rounded-[10px] text-sm font-semibold bg-[color:var(--ns-accent)] text-white">Sign in</button>
          {error && <div className="text-xs text-red-600 mt-2">{error}</div>}
        </div>
      </div>
    </div>
  );
}