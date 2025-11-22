import React from 'react';

export default function Billing() {
  return (
    <div className="space-y-6">
      <section className="rounded-[14px] overflow-hidden" style={{ backgroundImage: 'linear-gradient(66deg, rgba(233,230,206,1) 3%, rgba(237,127,88,1) 88%)' }}>
        <div className="p-6 flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold tracking-tight text-gray-800">Welcome</div>
            <div className="mt-1 text-sm text-gray-700">Billing overview and actions</div>
          </div>
          <div className="w-24 h-24 rounded-[14px] bg-white/40" />
        </div>
      </section>

      <section className="bg-[#FBF7F4] border border-ns-border rounded-[18px] p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Billing Summary</h3>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-xs rounded bg-white border border-ns-border">Download</button>
            <button className="px-3 py-1.5 text-xs rounded bg-white border border-ns-border">Share</button>
          </div>
        </div>
        <hr className="my-6 border-t" style={{ borderColor: '#E7EAEE' }} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-ns-border rounded-[8px] shadow-sm p-4">
            <div className="text-sm text-ns-muted">Total Due</div>
            <div className="mt-1 text-2xl font-semibold">$3,240</div>
          </div>
          <div className="bg-white border border-ns-border rounded-[8px] shadow-sm p-4">
            <div className="text-sm text-ns-muted">Paid</div>
            <div className="mt-1 text-2xl font-semibold">$9,560</div>
          </div>
          <div className="bg-white border border-ns-border rounded-[8px] shadow-sm p-4">
            <div className="text-sm text-ns-muted">Pending Invoices</div>
            <div className="mt-1 text-2xl font-semibold">12</div>
          </div>
        </div>
      </section>

      <section className="bg-[#FBF7F4] border border-ns-border rounded-[18px] p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          <button className="px-3 py-1.5 text-xs rounded bg-white border border-ns-border">View All</button>
        </div>
        <div className="mt-6 space-y-3">
          {[
            { id: 'INV-1001', name: 'John Doe', amount: '$240', status: 'Paid' },
            { id: 'INV-1002', name: 'Jane Smith', amount: '$180', status: 'Pending' },
            { id: 'INV-1003', name: 'Chris Lee', amount: '$320', status: 'Paid' }
          ].map(tx => (
            <div key={tx.id} className="bg-white border border-ns-border rounded-[8px] shadow-sm p-4 flex items-center">
              <div className="min-w-0">
                <div className="text-sm font-semibold">{tx.id}</div>
                <div className="text-xs text-ns-muted">{tx.name}</div>
              </div>
              <div className="ml-auto text-sm font-semibold">{tx.amount}</div>
              <div className="ml-4">
                <span className="px-2 py-1 text-xs rounded bg-white border border-ns-border">{tx.status}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6" style={{ borderTop: '3px solid #ED7F58' }} />
      </section>
    </div>
  );
}