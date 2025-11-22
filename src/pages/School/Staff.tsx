import React from 'react';

export default function Staff() {
  return (
    <div className="space-y-6">
      <section className="rounded-[14px] overflow-hidden" style={{ backgroundImage: 'linear-gradient(66deg, rgba(233,230,206,1) 3%, rgba(237,127,88,1) 88%)' }}>
        <div className="p-6 flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold tracking-tight text-gray-800">Welcome</div>
            <div className="mt-1 text-sm text-gray-700">School staff</div>
          </div>
          <div className="w-24 h-24 rounded-[14px] bg-white/40" />
        </div>
      </section>

      <section className="bg-[#FBF7F4] border border-ns-border rounded-[18px] p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Staff Directory</h3>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-xs rounded bg-white border border-ns-border">Add Staff</button>
            <button className="px-3 py-1.5 text-xs rounded bg-white border border-ns-border">Export</button>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white border border-ns-border rounded-[8px] shadow-sm p-4">
              <div className="text-sm font-semibold">Teacher {i + 1}</div>
              <div className="text-xs text-ns-muted">Department</div>
            </div>
          ))}
        </div>
        <div className="mt-6" style={{ borderTop: '3px solid #ED7F58' }} />
      </section>
    </div>
  );
}