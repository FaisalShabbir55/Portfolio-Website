import { motion } from 'framer-motion';
import { useOwnerData } from '../contexts/DataContext';
import SkillsSection from '../components/SkillsSection';
import './Skills.css';

const Skills = () => {
  const data = useOwnerData();
  const { skills, learning_path } = data;

  return (
    <div className="skills-page">
      <div className="container">
        <motion.section
          className="skills-header section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Skills & Expertise</h1>
          <p className="page-subtitle">
            Technologies and tools I work with
          </p>
        </motion.section>

        <SkillsSection skills={skills} />

        {learning_path && (
          <motion.section
            className="learning-path section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Learning Path</h2>
            <div className="learning-sections">
              {learning_path.currently_learning && learning_path.currently_learning.length > 0 && (
                <div className="learning-section">
                  <h3 className="learning-heading">Currently Learning</h3>
                  <div className="learning-tags">
                    {learning_path.currently_learning.map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="learning-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
              {learning_path.future_goals && learning_path.future_goals.length > 0 && (
                <div className="learning-section">
                  <h3 className="learning-heading">Future Goals</h3>
                  <div className="learning-tags">
                    {learning_path.future_goals.map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="learning-tag future"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default Skills;

