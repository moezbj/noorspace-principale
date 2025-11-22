import React from 'react';
import General from './General';
import Staff from './Staff';
import Infrastructure from './Infrastructure';

const SECTIONS: Record<string, string> = {
  general: 'General',
  staff: 'Staff',
  infrastructure: 'Infrastructure'
};

export default function School() {
  const [section, setSection] = React.useState<string>(() => {
    const hash = window.location.hash.slice(1);
    const match = hash.startsWith('school/') ? hash.split('/')[1] : 'general';
    return match in SECTIONS ? match : 'general';
  });

  React.useEffect(() => {
    function onHash() {
      const hash = window.location.hash.slice(1);
      const match = hash.startsWith('school/') ? hash.split('/')[1] : 'general';
      setSection(match in SECTIONS ? match : 'general');
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (section === 'staff') return <Staff />;
  if (section === 'infrastructure') return <Infrastructure />;
  return <General />;
}