import React, { useState } from 'react';
import { Card, SectionHeader, FilterRow, Banner } from './UI';
import { freeStuff } from '../data';

const CATS = ['All', 'Food & Drink', 'With Purchase', 'Grand Openings', 'App Promos', 'Samples'];

export default function FreeStuffTab() {
  const [cat, setCat] = useState('All');

  const filtered = freeStuff.filter(f =>
    cat === 'All' || f.category === cat
  );

  return (
    <div>
      <Banner
        variant="amber"
        label="Free Stuff"
        title='Real grabs. Not just "the library is free."'
        sub="Limited-time offers, promos & free-with-purchase finds near you"
      />
      <FilterRow options={CATS} active={cat} onChange={setCat} />
      <SectionHeader title="Act fast — limited time" count={filtered.length} />
      {filtered.length === 0 && (
        <div className="empty"><div className="empty-icon">🎁</div>No offers found</div>
      )}
      {filtered.map(f => (
        <Card
          key={f.id}
          emoji={f.emoji}
          title={f.title}
          sub={`${f.venue} · ${f.detail}`}
          tags={[
            { label: 'Free', color: 'tag-green' },
            { label: f.category, color: 'tag-teal' },
            ...(f.urgency ? [{ label: f.urgency, color: 'tag-red' }] : []),
          ]}
          right={
            <>
              <span className="price-free">FREE</span>
              <span className="dist-text">{f.dist}</span>
            </>
          }
        />
      ))}
    </div>
  );
}
