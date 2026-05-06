import { motion } from 'framer-motion';
import type { Project } from '../types';
import Modal from './Modal';
import ImageGallery from './ImageGallery';
import Button from './Button';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <motion.div
        className="project-modal-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <ImageGallery
          images={project.images || [project.image]}
          title="Project Screenshots"
        />

        <div className="project-modal-info">
          <div className="project-modal-header">
            <div>
              <p className="project-modal-category">{project.category}</p>
              <p className="project-modal-year">Year: {project.year}</p>
            </div>
            <div className="project-modal-links">
              {project.live_url && (
                <Button href={project.live_url} variant="primary">
                  Live Demo
                </Button>
              )}
              {project.github_url && (
                <Button href={project.github_url} variant="secondary">
                  View Code
                </Button>
              )}
            </div>
          </div>

          <div className="project-modal-description">
            <h3>Description</h3>
            <p>{project.long_description || project.description}</p>
          </div>

          {project.features && project.features.length > 0 && (
            <div className="project-modal-features">
              <h3>Key Features</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          <div className="project-modal-tech">
            <h3>Technologies Used</h3>
            <div className="tech-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.challenges && (
            <div className="project-modal-challenges">
              <h3>Challenges</h3>
              <p>{project.challenges}</p>
            </div>
          )}

          {project.solutions && (
            <div className="project-modal-solutions">
              <h3>Solutions</h3>
              <p>{project.solutions}</p>
            </div>
          )}
        </div>
      </motion.div>
    </Modal>
  );
};

export default ProjectModal;

