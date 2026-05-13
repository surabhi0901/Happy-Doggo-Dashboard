import React from 'react';

export default function TabNavigation({ tabs, activeTab, onTabChange }) {
  return (
    <div className="hd-nav" role="tablist">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
          role="tab"
          aria-selected={activeTab === tab.id}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
