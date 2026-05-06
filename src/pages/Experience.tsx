import { motion } from 'framer-motion';
import { useOwnerData } from '../contexts/DataContext';
import './Experience.css';

const Experience = () => {
  const data = useOwnerData();

  return (
    <div className="experience">
      <div className="container">
        <motion.section
          className="experience-header section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Experience</h1>
          <p className="page-subtitle">My professional journey and career progression</p>
        </motion.section>

        <div className="experience-timeline">
          {data.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="experience-content">
                <div className="experience-header-item">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">
                      {exp.company_url ? (
                        <a
                          href={exp.company_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h4>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-date">
                      {new Date(exp.start_date).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })}{' '}
                      -{' '}
                      {exp.current
                        ? 'Present'
                        : new Date(exp.end_date || '').toLocaleDateString('en-US', {
                            month: 'short',
                            year: 'numeric',
                          })}
                    </span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="experience-achievements">
                    <h5>Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="experience-tech">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

