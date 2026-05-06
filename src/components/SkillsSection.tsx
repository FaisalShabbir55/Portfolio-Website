import { motion } from 'framer-motion';
import type { Skills } from '../types';
import './SkillsSection.css';

interface SkillsSectionProps {
  skills: Skills;
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.tools,
    ...skills.design,
  ];

  const proficiencyColors = {
    beginner: '#ef4444',
    intermediate: '#f59e0b',
    advanced: '#3b82f6',
    expert: '#10b981',
  };

  return (
    <section className="skills-section section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {allSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <div className="skill-header">
              <h3 className="skill-name">{skill.name}</h3>
              <span
                className="skill-proficiency"
                style={{
                  color: proficiencyColors[skill.proficiency],
                }}
              >
                {skill.proficiency}
              </span>
            </div>
            <div className="skill-bar">
              <motion.div
                className="skill-bar-fill"
                style={{
                  backgroundColor: proficiencyColors[skill.proficiency],
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${(skill.proficiency === 'expert' ? 100 : skill.proficiency === 'advanced' ? 75 : skill.proficiency === 'intermediate' ? 50 : 25)}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
            <div className="skill-meta">
              <span>{skill.years} years</span>
              <span>{skill.projects_count} projects</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

