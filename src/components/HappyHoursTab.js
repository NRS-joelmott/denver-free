import React, { useState } from 'react';
import { SectionHeader, FilterRow, HHThumb } from './UI';
import { happyHours, NEIGHBORHOODS, DAYS } from '../data';

export default function HappyHoursTab() {
  const [hood, setHood] = useState('All Areas');
  const [query, setQuery] = useState('');

  const filtered = happyHours.filter(h => {
    const matchHood = hood === 'All Areas' || h.hood === hood;
    const q = query.toLowerCase();
    const matchQ = !q || h.title.toLowerCase().includes(q) || h.hood.toLowerCase().includes(q) || h.deals.some(d => d.toLowerCase().includes(q));
    return matchHood && matchQ;
  });

  const byDay = DAYS.reduce((acc, day) => {
    const items = filtered.filter(h => h.day === day);
    if (items.length) acc[day] = items;
    return acc;
  }, {});

  return (
    <div>
      <div className="search-wrap">
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          placeholder="Search bar, neighborhood or deal..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      <FilterRow options={NEIGHBORHOODS} active={hood} onChange={setHood} />
      <SectionHeader title="Happy hours by day" count={filtered.length} />

      {filtered.length === 0 && (
        <div className="empty"><div className="empty-icon">🍹</div>No happy hours found</div>
      )}

      {Object.entries(byDay).map(([day, items]) => (
        <div key={day} className="day-group">
          <div className="day-label">{day}</div>
          {items.map(h => (
            <a
              key={h.id}
              href={h.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div className="card-row">
                <HHThumb img={h.img} title={h.title} />
                <div className="hh-body">
                  <div className="hh-title">{h.title}</div>
                  <div className="hh-hood">{h.hood}</div>
                  <div className="hh-time">{h.time}</div>
                  <div className="hh-deals">
                    {h.deals.map((d, i) => (
                      <span key={i} className="hh-pill">{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
