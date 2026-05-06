import { motion } from 'framer-motion';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  return (
    <motion.div
      className="scroll-indicator"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <motion.div
        className="scroll-arrow"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ↓
      </motion.div>
      <span className="scroll-text">Scroll to explore</span>
    </motion.div>
  );
};

export default ScrollIndicator;

