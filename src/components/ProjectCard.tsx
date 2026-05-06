import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import Button from './Button';
import ProjectModal from './ProjectModal';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="project-card"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="project-image-wrapper">
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <div className="project-overlay">
            <div className="project-links">
              <Button
                variant="primary"
                onClick={(e?) => {
                  e?.stopPropagation();
                  setIsModalOpen(true);
                }}
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
        <div className="project-content">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            <span className="project-year">{project.year}</span>
          </div>
          <p className="project-description">{project.description}</p>
          <div className="project-tech">
            {project.technologies.slice(0, 5).map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="tech-badge">+{project.technologies.length - 5}</span>
            )}
          </div>
        </div>
      </motion.div>
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectCard;

