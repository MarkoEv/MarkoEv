import React from 'react';

function CarruselLeft({ items }) {
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          animation: 'scrollLeft 20s linear infinite',
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} style={{ minWidth: '150px', textAlign: 'center' }}>
            <img src={item.icono} width={48} height={48} />
          </div>
        ))}
      </div>
    </div>
  );
}

export { CarruselLeft };
