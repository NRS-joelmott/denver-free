import React, { useState } from 'react';
import { Card, SectionHeader, FilterRow } from './UI';
import { concerts } from '../data';

const GENRES = ['All Genres', 'Rock', 'Jazz', 'Country', 'Classical', 'Various'];
const TYPES = ['All Venues', 'Outdoor', 'Parks', 'Bars', 'Plazas'];
const urgencyColor = { 'Tonight': 'tag-red', 'This Sat': 'tag-purple', 'Weekly': 'tag-teal' };

export default function ConcertsTab() {
  const [genre, setGenre] = useState('All Genres');
  const [type, setType] = useState('All Venues');
  const filtered = concerts.filter(c => {
    const g = genre === 'All Genres' || c.genre === genre;
    const t = type === 'All Venues' || c.type === type;
    return g && t;
  });
  return (
    <div>
      <FilterRow options={GENRES} active={genre} onChange={setGenre} />
      <FilterRow options={TYPES} active={type} onChange={setType} />
      <SectionHeader title="Free shows this week" count={filtered.length} />
      {filtered.length === 0 && <div className="empty"><div className="empty-icon">🎵</div>No concerts match those filters</div>}
      {filtered.map(c => (
        <Card key={c.id} img={c.img} title={c.title} sub={`${c.venue} · ${c.day}`}
          tags={[{ label: 'Free', color: 'tag-green' }, ...c.tags.map(t => ({ label: t, color: urgencyColor[t] || 'tag-blue' })), { label: c.genre, color: 'tag-blue' }]}
          url={c.url}
          right={<><span className="price-free">FREE</span><span className="dist-text">{c.dist}</span></>}
        />
      ))}
    </div>
  );
}
