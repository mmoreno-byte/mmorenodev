import { useEffect, useState } from 'react';

export default function useTypewriter(text, speed = 80, delay = 600) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let charIndex = 0;

    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        setDisplayedText(text.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex >= text.length) clearInterval(intervalId);
      }, speed);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay]);

  return displayedText;
}
