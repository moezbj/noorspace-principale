import React from 'react';
import clsx from 'clsx';

type NavItem = {
  key: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  badge?: string | number;
};

type Props = {
  open: boolean;
  onToggle: () => void;
  activeKey?: string;
  role?: 'principale' | 'teacher' | 'parent' | 'student';
};

const ICONS = {
  dashboard: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 13h8V3H3v10zM3 21h8v-6H3v6zM13 21h8V11h-8v10zM13 3v6h8V3h-8z" fill="currentColor" />
    </svg>
  ),
  statistics: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 13h3v6H5v-6zm5-8h3v14h-3V5zm5 5h3v9h-3v-9z" fill="currentColor" />
    </svg>
  ),
  school: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 7v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  students: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0H4z" fill="currentColor" />
    </svg>
  ),
  classes: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M7 20h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  portal: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l9 9-9 9-9-9 9-9zm0 4.5L7.5 12 12 16.5 16.5 12 12 7.5z" fill="currentColor" />
    </svg>
  ),
  teacher: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2a5 5 0 015 5v1h2a2 2 0 012 2v10H3V10a2 2 0 012-2h2V7a5 5 0 015-5z" fill="currentColor" />
    </svg>
  ),
  parent: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 11a4 4 0 100-8 4 4 0 000 8zm10 0a3 3 0 100-6 3 3 0 000 6zM3 21a6 6 0 0112 0H3zm12 0h6a4 4 0 00-6-3.465V21z" fill="currentColor" />
    </svg>
  ),
  studentRole: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0H4z" fill="currentColor" />
    </svg>
  )
};

const PRINCIPALE_NAV: NavItem[] = [
  { key: 'dashboard', label: 'Dashboard', href: '#dashboard', icon: ICONS.dashboard },
  { key: 'statistics', label: 'Statistics', href: '#statistics', icon: ICONS.statistics },
  { key: 'school', label: 'School Management', href: '#school', icon: ICONS.school },
  { key: 'students', label: 'Student Management', href: '#students', icon: ICONS.students },
  { key: 'classes', label: 'Class Management', href: '#classes', icon: ICONS.classes },
  { key: 'portal', label: 'Portal', href: '#portal', icon: ICONS.portal }
];

const ROLE_LABELS: Record<'principale' | 'teacher' | 'parent' | 'student', string> = {
  principale: 'Principale',
  teacher: 'Teacher',
  parent: 'Parent',
  student: 'Student'
};

export default function Sidebar({ open, onToggle, activeKey = 'dashboard', role = 'principale' }: Props) {
  const [studentsOpen, setStudentsOpen] = React.useState(true);
  const [schoolOpen, setSchoolOpen] = React.useState(true);
  const [parentOpen, setParentOpen] = React.useState(true);
  const [studentRoleOpen, setStudentRoleOpen] = React.useState(true);
  const isStudentsRoute = activeKey.startsWith('students');
  const isSchoolRoute = activeKey.startsWith('school');
  const isTeacherRoute = activeKey.startsWith('teacher');
  const isParentRoute = activeKey.startsWith('parent');
  const isStudentRoleRoute = activeKey.startsWith('student');

  const nav: NavItem[] = React.useMemo(() => {
    if (role === 'principale') return PRINCIPALE_NAV;
    if (role === 'teacher') return [{ key: 'teacher', label: 'Teacher', href: '#teacher', icon: ICONS.teacher }];
    if (role === 'parent') return [{ key: 'parent', label: 'Parent', href: '#parent', icon: ICONS.parent }];
    return [{ key: 'student', label: 'Student', href: '#student', icon: ICONS.studentRole }];
  }, [role]);
  return (
    <aside
      aria-label="Sidebar"
      className={clsx(
        'flex flex-col h-screen transition-all duration-300 ease-in-out select-none',
        open ? 'w-64' : 'w-16',
        'bg-ns-primary text-ns-on-primary border-r border-ns-border'
      )}
      style={{ boxShadow: '0px 10px 12px 0px rgba(237, 127, 88, 0.89)' }}
    >
      <div className="flex items-center justify-between px-3 py-3 border-b border-white/10">
        <div className={clsx('flex items-center gap-3', !open && 'justify-center w-full')}> 
          <div
            className={clsx(
              'flex items-center justify-center w-10 h-10 rounded-md bg-white/10 text-white font-bold',
              'shrink-0'
            )}
            aria-hidden
          >
            N
          </div>
          {open && (
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-none">Noorspace</span>
              <span className="text-xs text-ns-muted/80 leading-none">{ROLE_LABELS[role]}</span>
            </div>
          )}
        </div>

        <button
          aria-label={open ? 'Collapse sidebar' : 'Expand sidebar'}
          onClick={onToggle}
          className="p-2 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
        >
          <svg className="w-4 h-4 transform" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M6 6h12M6 12h12M6 18h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto mt-2">
        <ul className="py-1">
          {nav.map(item => {
            const isActive =
              item.key === activeKey ||
              (item.key === 'students' && isStudentsRoute) ||
              (item.key === 'school' && isSchoolRoute) ||
              (item.key === 'teacher' && isTeacherRoute) ||
              (item.key === 'parent' && isParentRoute) ||
              (item.key === 'student' && isStudentRoleRoute);
            if (item.key === 'students') {
              return (
                <li key={item.key} className="relative">
                  <div
                    className={clsx(
                      'relative flex items-center gap-4 px-5 py-3 transition-colors cursor-pointer',
                      isActive ? 'bg-[color:var(--ns-accent)]' : 'hover:bg-black/5',
                      !open && 'justify-center px-0'
                    )}
                    onClick={() => setStudentsOpen(v => !v)}
                    aria-expanded={studentsOpen}
                    title={!open ? item.label : undefined}
                  >
                    <span className={clsx('inline-flex items-center justify-center shrink-0 w-7 h-7')}>{item.icon}</span>
                    <div className={clsx('flex items-center justify-between w-full', !open && 'hidden')}> 
                      <span className="ml-1 text-[20px] font-semibold">{item.label}</span>
                      <svg className={clsx('w-4 h-4 transition-transform', studentsOpen ? 'rotate-180' : 'rotate-0')} viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  {studentsOpen && (
                    <ul className={clsx('mt-1 space-y-1', !open && 'hidden')}> 
                      {[
                        { key: 'students/management', label: 'Student Management', href: '#students/management' },
                        { key: 'students/registration', label: 'Student Registration', href: '#students/registration' },
                        { key: 'students/list', label: 'Students List', href: '#students/list' },
                        { key: 'students/admissions', label: 'Admissions', href: '#students/admissions' },
                        { key: 'students/attendance', label: 'Attendance', href: '#students/attendance' },
                        { key: 'students/grades', label: 'Grades', href: '#students/grades' },
                        { key: 'students/exams', label: 'Exams', href: '#students/exams' },
                        { key: 'students/discipline', label: 'Discipline', href: '#students/discipline' },
                        { key: 'students/billing', label: 'Billing', href: '#students/billing' }
                      ].map(sub => (
                        <li key={sub.key}>
                          <a
                            href={sub.href}
                            className={clsx(
                              'flex items-center gap-3 pl-12 pr-4 py-2 rounded-[8px] hover:bg-black/5',
                              activeKey === sub.key ? 'bg-[color:var(--ns-accent)]' : ''
                            )}
                          >
                            <span className="text-sm">{sub.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }
            if (item.key === 'school') {
              return (
                <li key={item.key} className="relative">
                  <div
                    className={clsx(
                      'relative flex items-center gap-4 px-5 py-3 transition-colors cursor-pointer',
                      isActive ? 'bg-[color:var(--ns-accent)]' : 'hover:bg-black/5',
                      !open && 'justify-center px-0'
                    )}
                    onClick={() => setSchoolOpen(v => !v)}
                    aria-expanded={schoolOpen}
                    title={!open ? item.label : undefined}
                  >
                    <span className={clsx('inline-flex items-center justify-center shrink-0 w-7 h-7')}>{item.icon}</span>
                    <div className={clsx('flex items-center justify-between w-full', !open && 'hidden')}> 
                      <span className="ml-1 text-[20px] font-semibold">{item.label}</span>
                      <svg className={clsx('w-4 h-4 transition-transform', schoolOpen ? 'rotate-180' : 'rotate-0')} viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  {schoolOpen && (
                    <ul className={clsx('mt-1 space-y-1', !open && 'hidden')}> 
                      {[
                        { key: 'school/general', label: 'General', href: '#school/general' },
                        { key: 'school/staff', label: 'Staff', href: '#school/staff' },
                        { key: 'school/infrastructure', label: 'Infrastructure', href: '#school/infrastructure' }
                      ].map(sub => (
                        <li key={sub.key}>
                          <a
                            href={sub.href}
                            className={clsx(
                              'flex items-center gap-3 pl-12 pr-4 py-2 rounded-[8px] hover:bg-black/5',
                              activeKey === sub.key ? 'bg-[color:var(--ns-accent)]' : ''
                            )}
                          >
                            <span className="text-sm">{sub.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }
            if (item.key === 'teacher') {
              return (
                <li key={item.key} className="relative">
                  <a
                    href="#teacher"
                    className={clsx(
                      'relative flex items-center gap-4 px-5 py-3 transition-colors',
                      isActive ? 'bg-[color:var(--ns-accent)]' : 'hover:bg-black/5',
                      !open && 'justify-center px-0'
                    )}
                    title={!open ? item.label : undefined}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className={clsx('inline-flex items-center justify-center shrink-0 w-7 h-7')}>{item.icon}</span>
                    <div className={clsx('flex items-center justify-between w-full', !open && 'hidden')}>
                      <span className="ml-1 text-[20px] font-semibold">{item.label}</span>
                    </div>
                  </a>
                </li>
              );
            }
            if (item.key === 'parent') {
              return (
                <li key={item.key} className="relative">
                  <div
                    className={clsx(
                      'relative flex items-center gap-4 px-5 py-3 transition-colors cursor-pointer',
                      isActive ? 'bg-[color:var(--ns-accent)]' : 'hover:bg-black/5',
                      !open && 'justify-center px-0'
                    )}
                    onClick={() => setParentOpen(v => !v)}
                    aria-expanded={parentOpen}
                    title={!open ? item.label : undefined}
                  >
                    <span className={clsx('inline-flex items-center justify-center shrink-0 w-7 h-7')}>{item.icon}</span>
                    <div className={clsx('flex items-center justify-between w-full', !open && 'hidden')}>
                      <span className="ml-1 text-[20px] font-semibold">{item.label}</span>
                      <svg className={clsx('w-4 h-4 transition-transform', parentOpen ? 'rotate-180' : 'rotate-0')} viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  {parentOpen && (
                    <ul className={clsx('mt-1 space-y-1', !open && 'hidden')}>
                      {[
                        { key: 'parent/dashboard', label: 'Dashboard', href: '#parent/dashboard' },
                        { key: 'parent/children', label: 'Children', href: '#parent/children' },
                        { key: 'parent/billing', label: 'Billing', href: '#parent/billing' }
                      ].map(sub => (
                        <li key={sub.key}>
                          <a
                            href={sub.href}
                            className={clsx(
                              'flex items-center gap-3 pl-12 pr-4 py-2 rounded-[8px] hover:bg-black/5',
                              activeKey === sub.key ? 'bg-[color:var(--ns-accent)]' : ''
                            )}
                          >
                            <span className="text-sm">{sub.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }
            if (item.key === 'student') {
              return (
                <li key={item.key} className="relative">
                  <div
                    className={clsx(
                      'relative flex items-center gap-4 px-5 py-3 transition-colors cursor-pointer',
                      isActive ? 'bg-[color:var(--ns-accent)]' : 'hover:bg-black/5',
                      !open && 'justify-center px-0'
                    )}
                    onClick={() => setStudentRoleOpen(v => !v)}
                    aria-expanded={studentRoleOpen}
                    title={!open ? item.label : undefined}
                  >
                    <span className={clsx('inline-flex items-center justify-center shrink-0 w-7 h-7')}>{item.icon}</span>
                    <div className={clsx('flex items-center justify-between w-full', !open && 'hidden')}>
                      <span className="ml-1 text-[20px] font-semibold">{item.label}</span>
                      <svg className={clsx('w-4 h-4 transition-transform', studentRoleOpen ? 'rotate-180' : 'rotate-0')} viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  {studentRoleOpen && (
                    <ul className={clsx('mt-1 space-y-1', !open && 'hidden')}>
                      {[
                        { key: 'student/dashboard', label: 'Dashboard', href: '#student/dashboard' },
                        { key: 'student/courses', label: 'Courses', href: '#student/courses' },
                        { key: 'student/grades', label: 'Grades', href: '#student/grades' },
                        { key: 'student/attendance', label: 'Attendance', href: '#student/attendance' }
                      ].map(sub => (
                        <li key={sub.key}>
                          <a
                            href={sub.href}
                            className={clsx(
                              'flex items-center gap-3 pl-12 pr-4 py-2 rounded-[8px] hover:bg-black/5',
                              activeKey === sub.key ? 'bg-[color:var(--ns-accent)]' : ''
                            )}
                          >
                            <span className="text-sm">{sub.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }
            return (
              <li key={item.key} className="relative">
                <a
                  href={item.href}
                  className={clsx(
                    'relative flex items-center gap-4 px-5 py-3 transition-colors',
                    isActive
                      ? 'bg-[color:var(--ns-accent)]'
                      : 'hover:bg-black/5',
                    !open && 'justify-center px-0'
                  )}
                  title={!open ? item.label : undefined}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className={clsx('inline-flex items-center justify-center shrink-0 w-7 h-7')}>{item.icon}</span>
                  <div className={clsx('flex items-center justify-between w-full', !open && 'hidden')}> 
                    <span className="ml-1 text-[20px] font-semibold">{item.label}</span>
                    {item.badge && <span className="ml-2 text-xs px-2 py-0.5 rounded bg-white/10 text-[color:var(--ns-accent)]">{item.badge}</span>} 
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-3 border-t border-white/10"> 
        <button
          className={clsx(
            'flex items-center gap-3 w-full px-3 py-2 rounded-md transition-colors',
            'text-white/90 hover:bg-white/5',
            !open && 'justify-center'
          )}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 12v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 10l6-6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className={clsx('text-sm', !open && 'hidden')}>Settings</span>
        </button>

        <button
          className={clsx(
            'mt-2 flex items-center gap-3 w-full px-3 py-2 rounded-md transition-colors',
            'text-white/90 hover:bg-white/5',
            !open && 'justify-center'
          )}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M16 17v-5a4 4 0 10-8 0v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 22a2 2 0 002-2H10a2 2 0 002 2z" fill="currentColor" />
          </svg>
          <span className={clsx('text-sm', !open && 'hidden')}>Sign out</span>
        </button>
      </div>
    </aside>
  );
}