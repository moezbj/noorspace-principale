import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(v => !v)} />
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={() => setSidebarOpen(v => !v)} />
        <main className="p-6 bg-white min-h-[calc(100vh-64px)]">
          {children}
        </main>
      </div>
    </div>
  );
}