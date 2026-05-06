import { motion } from 'framer-motion';
import { useOwnerData } from '../contexts/DataContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from './Button';
import './SkillsPreview.css';

const SkillsPreview = () => {
  const data = useOwnerData();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const topSkills = [
    ...data.skills.frontend.slice(0, 3),
    ...data.skills.backend.slice(0, 2),
    ...data.skills.tools.slice(0, 2),
  ].slice(0, 8);

  return (
    <section ref={ref} className="skills-preview">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Core Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I work with daily
          </p>
        </motion.div>

        <div className="skills-grid">
          {topSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-preview-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="skill-icon">{skill.icon || '💻'}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">
                <div className="skill-level-bar">
                  <motion.div
                    className="skill-level-fill"
                    initial={{ width: 0 }}
                    animate={
                      isVisible
                        ? {
                            width: `${
                              skill.proficiency === 'expert'
                                ? 100
                                : skill.proficiency === 'advanced'
                                ? 80
                                : skill.proficiency === 'intermediate'
                                ? 60
                                : 40
                            }%`,
                          }
                        : {}
                    }
                    transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
                  />
                </div>
                <span className="skill-proficiency">{skill.proficiency}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="view-all"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button to="/skills" variant="secondary">
            View All Skills
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPreview;

