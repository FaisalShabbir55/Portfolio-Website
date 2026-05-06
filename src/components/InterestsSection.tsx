import { motion } from 'framer-motion';
import type { Interest } from '../types';
import './InterestsSection.css';

interface InterestsSectionProps {
  interests: Interest[];
}

const InterestsSection = ({ interests }: InterestsSectionProps) => {
  return (
    <section className="interests-section section">
      <h2 className="section-title">Interests</h2>
      <div className="interests-grid">
        {interests.map((interest, index) => (
          <motion.div
            key={interest.id}
            className="interest-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -4 }}
          >
            {interest.image && (
              <div className="interest-image">
                <img src={interest.image} alt={interest.name} />
              </div>
            )}
            <div className="interest-content">
              <h3 className="interest-name">{interest.name}</h3>
              <p className="interest-description">{interest.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;

