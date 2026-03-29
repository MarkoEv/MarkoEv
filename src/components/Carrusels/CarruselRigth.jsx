import React from 'react';

function CarruselRigth({ items }) {
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          animation: 'scrollRight 20s linear infinite',
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

export { CarruselRigth };
