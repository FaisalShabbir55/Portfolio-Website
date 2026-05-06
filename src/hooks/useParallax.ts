import { useEffect, useState } from 'react';

interface UseParallaxOptions {
  speed?: number;
  offset?: number;
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { speed = 0.5, offset = 0 } = options;
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${offsetY * speed + offset}px)`,
  };

  return parallaxStyle;
};

