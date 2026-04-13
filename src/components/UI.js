import React from 'react';

export function Card({ emoji, title, sub, tags = [], right, children }) {
  return (
    <div className="card">
      <div className="card-row">
        <div className="card-thumb">{emoji}</div>
        <div className="card-body">
          <div className="card-title">{title}</div>
          {sub && <div className="card-sub">{sub}</div>}
          {tags.length > 0 && (
            <div className="card-tags">
              {tags.map((t, i) => (
                <span key={i} className={`tag ${t.color}`}>{t.label}</span>
              ))}
            </div>
          )}
          {children}
        </div>
        {right && <div className="card-right">{right}</div>}
      </div>
    </div>
  );
}

export function SectionHeader({ title, count }) {
  return (
    <div className="sec-head">
      <span className="sec-title">{title}</span>
      {count !== undefined && <span className="count-badge">{count}</span>}
    </div>
  );
}

export function FilterRow({ options, active, onChange }) {
  return (
    <div className="filter-row">
      {options.map(opt => (
        <button
          key={opt}
          className={`chip ${active === opt ? 'on' : ''}`}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export function Banner({ variant = 'purple', label, title, sub }) {
  return (
    <div className={`banner banner-${variant}`}>
      <div className="banner-label">{label}</div>
      <div className="banner-title">{title}</div>
      {sub && <div className="banner-sub">{sub}</div>}
    </div>
  );
}
