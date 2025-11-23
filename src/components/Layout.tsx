import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { useAuth } from '../context/AuthProvider';
import Header from './Header';
import PrincipaleDashboard from '../pages/PrincipaleDashboard';
import Statistics from '../pages/Statistics';
import Students from '../pages/Students/Students';
import School from '../pages/School/School';
import SignIn from '../pages/Auth/SignIn';
import Teacher from '../pages/Teacher/Teacher';
import Parent from '../pages/Parent/Parent';
import Student from '../pages/Student/Student';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [route, setRoute] = useState<string>(() => (window.location.hash?.slice(1) || 'dashboard'));
  const { role, token, user } = useAuth();

  React.useEffect(() => {
    function onHash() {
      const r = window.location.hash.slice(1) || 'dashboard';
      setRoute(r);
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  React.useEffect(() => {}, [role]);

  React.useEffect(() => {
    const r = window.location.hash.slice(1) || 'dashboard';
    if ((!token || !user) && r !== 'signin') {
      window.location.hash = 'signin';
    }
  }, [token, user]);

  if (route === 'signin') {
    return (
      <div className="min-h-screen">
        <SignIn />
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden flex">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(v => !v)} activeKey={route} role={role} />
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={() => setSidebarOpen(v => !v)} />
        <main className="p-6 bg-white flex-1 overflow-y-auto">
                  {route === 'dashboard' && <PrincipaleDashboard />}
                  {route === 'statistics' && <Statistics />}
                  {route.startsWith('students') && <Students />}
                  {route.startsWith('school') && <School />}
                  {route.startsWith('teacher') && <Teacher />}
                  {route.startsWith('parent') && <Parent />}
                  {route.startsWith('student') && <Student />}
                  {route !== 'dashboard' &&
                   !route.startsWith('students') &&
                   !route.startsWith('school') &&
                   !route.startsWith('teacher') &&
                   !route.startsWith('parent') &&
                   !route.startsWith('student') &&
                   route !== 'statistics' && children}
        </main>
      </div>
    </div>
  );
}