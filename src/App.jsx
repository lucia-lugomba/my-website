import React from 'react';
import ColorBends from './components/ColorBends';

export default function App() {
  return (
    <div style={{width: '600px', height: '400px'}}>
      <ColorBends
        color="#A855F7"
        speed={0.2}
        frequency={1.0}
        noise={0.15}
        bandWidth={0.14}
        rotation={90}
        fadeTop={0.75}
        iterations={1}
        intensity={1.3}
      />
    </div>
  );
}
