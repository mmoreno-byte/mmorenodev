import { useEffect, useRef } from 'react';
import './MatrixBackground.css';

export default function MatrixBackground() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 13;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    // Mezcla de caracteres técnicos y japoneses
    const chars = '01アイウエオカキクケコ{}[]<>/\\|=+-*&^%$#@!abcdefghijklmnopqrstuvwxyz';

    function draw() {
      // Fondo con trail suave
      ctx.fillStyle = 'rgba(6, 6, 8, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;

        // Cabeza de la columna más brillante
        if (y * fontSize < fontSize * 2) {
          ctx.fillStyle = '#a7f3d0'; // cian muy claro para la cabeza
        } else {
          ctx.fillStyle = '#2d9e7e'; // cian-verde apagado para el resto
        }

        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(char, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    }

    const interval = setInterval(draw, 55);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas" />;
}
