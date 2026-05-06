import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useOwnerData } from '../contexts/DataContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from './Button';
import './FeaturedProjectsPreview.css';

const FeaturedProjectsPreview = () => {
  const data = useOwnerData();
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const featuredProjects = data.projects
    .filter((project) => data.featured_projects.includes(project.id))
    .slice(0, 3);

  if (featuredProjects.length === 0) return null;

  return (
    <section ref={ref} className="featured-projects-preview">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            A selection of my best projects showcasing my skills and expertise
          </p>
        </motion.div>

        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="featured-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="featured-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="featured-image"
                />
                <div className="featured-overlay">
                  <div className="featured-actions">
                    {project.live_url && (
                      <Button href={project.live_url} variant="primary">
                        Live Demo
                      </Button>
                    )}
                    <Button
                      onClick={(e?) => {
                        e?.stopPropagation();
                        navigate('/projects');
                      }}
                      variant="secondary"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              <div className="featured-content">
                <h3 className="featured-title">{project.title}</h3>
                <p className="featured-description">{project.description}</p>
                <div className="featured-tech">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-badge-small">
                      {tech}
                    </span>
                  ))}
                </div>
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
          <Button to="/projects" variant="primary">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjectsPreview;

