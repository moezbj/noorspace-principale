import React from 'react';

const SECTIONS: Record<string, string> = {
  dashboard: 'Dashboard',
  children: 'Children',
  billing: 'Billing'
};

export default function Parent() {
  const [section, setSection] = React.useState<string>(() => {
    const hash = window.location.hash.slice(1);
    const match = hash.startsWith('parent/') ? hash.split('/')[1] : 'dashboard';
    return match in SECTIONS ? match : 'dashboard';
  });

  React.useEffect(() => {
    function onHash() {
      const hash = window.location.hash.slice(1);
      const match = hash.startsWith('parent/') ? hash.split('/')[1] : 'dashboard';
      setSection(match in SECTIONS ? match : 'dashboard');
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="space-y-6">
      <section className="rounded-[14px] overflow-hidden" style={{ backgroundImage: 'linear-gradient(66deg, rgba(233,230,206,1) 3%, rgba(237,127,88,1) 88%)' }}>
        <div className="p-6 flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold tracking-tight text-gray-800">Parent</div>
            <div className="mt-1 text-sm text-gray-700">{SECTIONS[section]}</div>
          </div>
          <div className="w-24 h-24 rounded-[14px] bg-white/40" />
        </div>
      </section>

      <section className="bg-[#FBF7F4] border border-ns-border rounded-[18px] p-6">
        <h3 className="text-lg font-semibold">{SECTIONS[section]}</h3>
        <p className="mt-2 text-sm text-ns-muted">Routes for the Parent role: {Object.keys(SECTIONS).join(', ')}.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white border border-ns-border rounded-[8px] shadow-sm p-4">
              <div className="text-sm font-semibold">Tile {i + 1}</div>
              <div className="text-xs text-ns-muted">Sample content</div>
            </div>
          ))}
        </div>
        <div className="mt-6" style={{ borderTop: '3px solid #ED7F58' }} />
      </section>
    </div>
  );
}