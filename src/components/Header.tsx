import React from 'react';
import Dropdown from './ui/Dropdown';
import { useAuth } from '../context/AuthProvider';

type Props = {
  onToggleSidebar: () => void;
};

function HeaderUserMenu() {
  const { signout } = useAuth();
  return (
    <div className="p-2 min-w-[180px]">
      <a href="#profile" className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded">Profile</a>
      <button onClick={signout} className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded">Sign out</button>
    </div>
  );
}



export default function Header({ onToggleSidebar }: Props) {
  return (
    <header className="h-16 bg-white flex items-center justify-between px-4 border-b">
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="p-2 rounded hover:bg-gray-100">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        <h1 className="text-lg font-semibold">Principale Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <Dropdown
          trigger={<button className="px-3 py-2 bg-gray-100 rounded">Create</button>}
        >
          <div className="p-2">
            <button className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded">New Class</button>
            <button className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded">Invite Teacher</button>
          </div>
        </Dropdown>

        <Dropdown
          trigger={
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/src/assets/avatar-placeholder.png" alt="avatar" className="w-8 h-8 rounded-full" />
              <div className="hidden md:block">
                <div className="text-sm font-medium">Noor Admin</div>
                <div className="text-xs text-gray-500">Principale</div>
              </div>
            </div>
          }
        >
          <HeaderUserMenu />
        </Dropdown>
      </div>
    </header>
  );
}