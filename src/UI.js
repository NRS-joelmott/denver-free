import React, { useState } from 'react';

function Thumb({ img, emoji, title }) {
  const [err, setErr] = useState(false);
  if (img && !err) {
    return (
      <div className="card-thumb" style={{ padding: 0, overflow: 'hidden' }}>
        <img
          src={img}
          alt={title}
          onError={() => setErr(true)}
          style={{ width: '78px', height: '78px', objectFit: 'cover', display: 'block' }}
        />
      </div>
    );
  }
  return <div className="card-thumb">{emoji || '📍'}</div>;
}

export function Card({ img, emoji, title, sub, tags = [], right, url, children }) {
  const inner = (
    <div className="card-row">
      <Thumb img={img} emoji={emoji} title={title} />
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
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="card"
        style={{ textDecoration: 'none', display: 'block' }}
      >
        {inner}
      </a>
    );
  }
  return <div className="card">{inner}</div>;
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

export function HHThumb({ img, title }) {
  const [err, setErr] = useState(false);
  if (img && !err) {
    return (
      <div className="card-thumb" style={{ padding: 0, overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={img}
          alt={title}
          onError={() => setErr(true)}
          style={{ width: '78px', height: '100%', minHeight: '78px', objectFit: 'cover', display: 'block' }}
        />
      </div>
    );
  }
  return <div className="card-thumb">🍺</div>;
}
