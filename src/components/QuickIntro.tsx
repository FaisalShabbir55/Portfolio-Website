import { motion } from 'framer-motion';
import { useOwnerData } from '../contexts/DataContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from './Button';
import './QuickIntro.css';

const QuickIntro = () => {
  const data = useOwnerData();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={ref} className="quick-intro">
      <div className="container">
        <div className="intro-content">
          <motion.div
            className="intro-text"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="intro-title">About Me</h2>
            <p className="intro-bio">{data.owner.bio}</p>
            <p className="intro-story">{data.owner.story.substring(0, 200)}...</p>
            <div className="intro-actions">
              <Button to="/about" variant="primary">
                Learn More
              </Button>
              <Button to="/contact" variant="secondary">
                Get In Touch
              </Button>
            </div>
          </motion.div>

          {data.owner.profile_image && (
            <motion.div
              className="intro-image-wrapper"
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="intro-image-frame">
                <img
                  src={data.owner.profile_image}
                  alt={data.owner.name}
                  className="intro-image"
                />
                <div className="image-decoration"></div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuickIntro;

