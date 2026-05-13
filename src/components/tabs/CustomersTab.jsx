import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { customers } from '../../data';

export default function CustomersTab() {
  const [filterSeg, setFilterSeg] = useState('');
  const [filterProd, setFilterProd] = useState('');

  const filtered = customers.filter(c => 
    (!filterSeg || c.seg === filterSeg) && (!filterProd || c.product === filterProd)
  );

  const sorted = filtered.sort((a, b) => b.order - a.order);

  return (
    <div className="hd-card">
      <div className="hd-card-title" style={{ justifyContent: 'space-between' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Users size={15} />
          All customers
        </span>
        <div style={{ display: 'flex', gap: '6px' }}>
          <select 
            value={filterSeg} 
            onChange={(e) => setFilterSeg(e.target.value)}
          >
            <option value="">All segments</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <select 
            value={filterProd} 
            onChange={(e) => setFilterProd(e.target.value)}
          >
            <option value="">All products</option>
            <option value="Training">Training</option>
            <option value="Treats">Treats</option>
            <option value="Grooming">Grooming</option>
          </select>
        </div>
      </div>
      <div className="scroll-table">
        <table className="hd-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>City</th>
              <th>Breed</th>
              <th>Product</th>
              <th>Order (₹)</th>
              <th>Freq</th>
              <th>Segment</th>
              <th>Repeat</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(c => {
              const sc = c.seg === 'High' ? 'high' : c.seg === 'Medium' ? 'med' : 'low';
              const rc = c.repeat === 'Yes' ? 'rep' : 'one';
              return (
                <tr key={c.name}>
                  <td style={{ fontWeight: '500' }}>{c.name}</td>
                  <td>{c.city}</td>
                  <td style={{ color: 'var(--color-text-secondary)' }}>{c.breed}</td>
                  <td>{c.product}</td>
                  <td style={{ fontWeight: '500' }}>₹{c.order.toLocaleString()}</td>
                  <td style={{ textAlign: 'center' }}>{c.freq}</td>
                  <td><span className={`hd-pill ${sc}`}>{c.seg}</span></td>
                  <td><span className={`hd-pill ${rc}`}>{c.repeat}</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: '8px', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
        Showing {sorted.length} of {customers.length} customers
      </div>
    </div>
  );
}
