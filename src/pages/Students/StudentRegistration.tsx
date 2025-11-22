import React from 'react';

export default function StudentRegistration() {
  return (
    <div className="space-y-6">
      <section className="rounded-[14px] overflow-hidden" style={{ backgroundImage: 'linear-gradient(66deg, rgba(233,230,206,1) 3%, rgba(237,127,88,1) 88%)' }}>
        <div className="p-6 flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold tracking-tight text-gray-800">Welcome</div>
            <div className="mt-1 text-sm text-gray-700">Student registration</div>
          </div>
          <div className="w-24 h-24 rounded-[14px] bg-white/40" />
        </div>
      </section>

      <section className="bg-[#FBF7F4] border border-ns-border rounded-[18px] p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Student Registration</h3>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-xs rounded bg-white border border-ns-border">Reset</button>
            <button className="px-3 py-1.5 text-xs rounded bg-white border border-ns-border">Submit</button>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: 'First Name', type: 'text', placeholder: 'John' },
            { label: 'Last Name', type: 'text', placeholder: 'Doe' },
            { label: 'Gender', type: 'select', options: ['Male', 'Female'] },
            { label: 'Date of Birth', type: 'date' },
            { label: 'Class', type: 'text', placeholder: 'Grade 8' },
            { label: 'Parent Name', type: 'text', placeholder: 'Jane Doe' },
            { label: 'Email', type: 'email', placeholder: 'john@example.com' },
            { label: 'Phone', type: 'tel', placeholder: '+1 555 0100' },
            { label: 'Enrollment Date', type: 'date' },
            { label: 'Fees Plan', type: 'select', options: ['Monthly', 'Quarterly', 'Yearly'] },
            { label: 'Address', type: 'text', placeholder: '123 Main St' }
          ].map((f, i) => (
            <div key={i}>
              <div className="text-xs font-semibold text-gray-700 mb-1">{f.label}</div>
              {f.type === 'select' ? (
                <select className="w-full rounded-[8px] border border-ns-border bg-white px-3 py-2 text-sm">
                  {f.options?.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input type={f.type} placeholder={f.placeholder} className="w-full rounded-[8px] border border-ns-border bg-white px-3 py-2 text-sm" />
              )}
            </div>
          ))}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="text-xs font-semibold text-gray-700 mb-1">Notes</div>
            <textarea className="w-full rounded-[8px] border border-ns-border bg-white px-3 py-2 text-sm" rows={4} />
          </div>
        </div>
        <div className="mt-6" style={{ borderTop: '3px solid #ED7F58' }} />
      </section>
    </div>
  );
}