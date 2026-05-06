import { motion } from 'framer-motion';
import type { TimelineItem } from '../types';
import './Timeline.css';

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <section className="timeline-section section">
      <h2 className="section-title">Timeline</h2>
      <div className="timeline">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-title">{item.title}</h3>
                <span className="timeline-date">
                  {new Date(item.start_date).getFullYear()} -{' '}
                  {item.end_date &&
                  item.end_date.toLowerCase() !== 'present'
                    ? new Date(item.end_date).getFullYear()
                    : 'Present'}
                </span>
              </div>
              <p className="timeline-location">
                {item.institution || item.company} • {item.location}
              </p>
              <p className="timeline-description">{item.description}</p>
              {item.achievements && item.achievements.length > 0 && (
                <ul className="timeline-achievements">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;

