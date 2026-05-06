import { motion } from 'framer-motion';
import { useOwnerData } from '../contexts/DataContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './StatsSection.css';

const StatsSection = () => {
  const data = useOwnerData();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const allSkills = [
    ...data.skills.frontend,
    ...data.skills.backend,
    ...data.skills.tools,
    ...data.skills.design,
  ];

  const totalProjects = data.projects.length;
  const totalSkills = allSkills.length;
  const yearsOfExperience = Math.max(
    ...allSkills.map((skill) => skill.years),
    0
  );
  const totalTechnologies = new Set(
    data.projects.flatMap((p) => p.technologies)
  ).size;

  const stats = [
    { label: 'Projects Completed', value: totalProjects, suffix: '+' },
    { label: 'Years Experience', value: yearsOfExperience, suffix: '+' },
    { label: 'Technologies', value: totalTechnologies, suffix: '+' },
    { label: 'Skills Mastered', value: totalSkills, suffix: '+' },
  ];

  return (
    <section ref={ref} className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="stat-value"
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{
                  delay: index * 0.1 + 0.2,
                  type: 'spring',
                  stiffness: 200,
                }}
              >
                {stat.value}
                <span className="stat-suffix">{stat.suffix}</span>
              </motion.div>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

