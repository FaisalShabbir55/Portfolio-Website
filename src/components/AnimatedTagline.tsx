import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AnimatedTagline.css';

interface AnimatedTaglineProps {
  taglines: string[];
}

const AnimatedTagline = ({ taglines }: AnimatedTaglineProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (taglines.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <div className="animated-tagline">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          className="tagline-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {taglines[currentIndex]}
        </motion.p>
      </AnimatePresence>
      {taglines.length > 1 && (
        <div className="tagline-indicators">
          {taglines.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedTagline;

