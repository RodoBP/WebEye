import React, { useEffect } from 'react';

function WebEyeAnimation() {
  useEffect(() => {
    const text = 'WebEye';
    const colors = ['#0043FF', '#005FFF', '#007BFF', '#0097FF', '#00B3FF', '#00CFFF'];
    const container = document.getElementById('webeye-animation');

    text.split('').forEach((letter, i) => {
      const span = document.createElement('span');
      span.style.opacity = '0';
      span.style.transition = 'opacity 0.5s';
      span.innerText = letter;
      span.style.color = colors[i % colors.length];
      container.appendChild(span);

      setTimeout(() => {
        span.style.opacity = '1';
      }, i * 250);
    });
  }, []);

  return <div id="webeye-animation" className="text-2xl font-bold text-center mb-4"></div>;
}

export default WebEyeAnimation;
