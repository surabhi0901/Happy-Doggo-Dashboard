import React from 'react';
import { Dog, CheckCircle } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="hd-topbar">
      <div className="hd-logo">
        <div className="hd-logo-icon">
          <Dog size={20} color="#fff" />
        </div>
        <div>
          <div className="hd-logo-text">Happy Doggo</div>
          <div className="hd-logo-sub">Business Intelligence Dashboard</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span className="hd-badge">
          <CheckCircle size={12} />
          15 customers · ₹60,300 total
        </span>
      </div>
    </div>
  );
}
