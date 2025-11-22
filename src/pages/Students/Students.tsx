import React from 'react';

const SECTIONS: Record<string, string> = {
  list: 'Students List',
  admissions: 'Admissions',
  attendance: 'Attendance',
  grades: 'Grades',
  exams: 'Exams',
  discipline: 'Discipline',
  billing: 'Billing',
  management: 'Student Management',
  registration: 'Student Registration'
};

import Billing from './Billing';
import StudentManagement from './StudentManagement';
import StudentRegistration from './StudentRegistration';

export default function Students() {
  const [section, setSection] = React.useState<string>(() => {
    const hash = window.location.hash.slice(1);
    const match = hash.startsWith('students/') ? hash.split('/')[1] : 'list';
    return match in SECTIONS ? match : 'list';
  });

  React.useEffect(() => {
    function onHash() {
      const hash = window.location.hash.slice(1);
      const match = hash.startsWith('students/') ? hash.split('/')[1] : 'list';
      setSection(match in SECTIONS ? match : 'list');
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (section === 'billing') {
    return <Billing />;
  }
  if (section === 'management') {
    return <StudentManagement />;
  }
  if (section === 'registration') {
    return <StudentRegistration />;
  }

  return (
    <div className="space-y-6">
      <section className="bg-ns-card border border-ns-border p-6 rounded-[20px] [box-shadow:0_10px_20px_rgba(0,0,0,0.06)]">
        <h2 className="text-xl font-semibold tracking-tight">{SECTIONS[section]}</h2>
        <p className="mt-2 text-sm text-ns-muted">This section will mirror the exact Figma layout for {SECTIONS[section]}.</p>
      </section>
    </div>
  );
}