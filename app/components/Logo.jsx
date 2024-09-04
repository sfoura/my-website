import React from 'react';

const Logo = ({ width = 100, height = 100 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="white" stroke="black" stroke-width="2"/>
      <text x="50" y="50" fontFamily="Arial, sans-serif" fontSize="30" textAnchor="middle" dominantBaseline="central">
        <tspan>TC</tspan>
        <tspan dy="8" fontSize="20">JR</tspan>
      </text>
    </svg>
  );
};

export default Logo;