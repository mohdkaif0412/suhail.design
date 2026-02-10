import React from 'react';

export const Meteors = ({ number = 8, containerClass = '' }) => {
  const meteors = new Array(number).fill(true);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${containerClass}`}>
      {meteors.map((_, idx) => {
  // Start near the top area (0-25%) and spread horizontally (0-100%)
  const left = Math.random() * 100; // percent across container
  const top = Math.random() * 20 + 0.5; // start near top (0.5% - 20.5%)
  const delay = Math.random() * 3; // seconds
  const duration = 3 + Math.random() * 5; // 3-8s
  const width = 30 + Math.random() * 120; // px

        return (
          <span
            key={idx}
            className="meteor"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${width}px`,
              animation: `meteor ${duration}s linear ${delay}s infinite`,
              opacity: 0.9,
            }}
          />
        );
      })}
    </div>
  );
};

export default Meteors;
