import React from 'react';

export const IllustrationSubgraph = () => {
  return (
    <svg
      width="320"
      height="184"
      viewBox="0 0 320 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="320" height="184" fill="#D9EAD3" />

      {/* First Rectangle */}
      <rect
        x="75"
        y="40"
        width="140"
        height="70"
        fill="#D9EAD3"
        stroke="#6FCF97"
        strokeWidth="1.5"
      />

      {/* First Line */}
      <line
        x1="75"
        y1="60"
        x2="215"
        y2="60"
        stroke="#6FCF97"
        strokeWidth="1.5"
      />

      {/* Second Rectangle */}
      <rect
        x="95"
        y="60"
        width="140"
        height="70"
        fill="#D9EAD3"
        stroke="#6FCF97"
        strokeWidth="1.5"
      />

      {/* Second Line */}
      <line
        x1="95"
        y1="80"
        x2="235"
        y2="80"
        stroke="#6FCF97"
        strokeWidth="1.5"
      />

      {/* Third Rectangle */}
      <rect
        x="115"
        y="80"
        width="140"
        height="70"
        fill="#D9EAD3"
        stroke="#6FCF97"
        strokeWidth="1.5"
      />

      {/* Third Line */}
      <line
        x1="115"
        y1="100"
        x2="255"
        y2="100"
        stroke="#6FCF97"
        strokeWidth="1.5"
      />
    </svg>
  );
};
