import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'right' | 'left';
};

export default function Dropdown({ trigger, children, align = 'right' }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <div onClick={() => setOpen(v => !v)}>{trigger}</div>

      <div
        className={clsx(
          'absolute mt-2 min-w-[180px] bg-white border rounded shadow-md z-30 transition transform origin-top',
          open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none',
          align === 'right' ? 'right-0' : 'left-0'
        )}
      >
        {children}
      </div>
    </div>
  );
}