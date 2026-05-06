import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useOwnerData } from '../contexts/DataContext';
import ProjectCard from '../components/ProjectCard';
import FilterTags from '../components/FilterTags';
import SearchBar from '../components/SearchBar';
import './Projects.css';

const Projects = () => {
  const data = useOwnerData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    let filtered = data.projects;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(
        (project) => project.category === selectedCategory
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(query)
          )
      );
    }

    return filtered;
  }, [data.projects, selectedCategory, searchQuery]);

  return (
    <div className="projects">
      <div className="container">
        <motion.section
          className="projects-header section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">
            A collection of my work and technical achievements
          </p>

          <div className="projects-controls">
            <FilterTags
              categories={data.project_categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search projects..."
            />
          </div>
        </motion.section>

        <motion.section
          className="projects-grid-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No projects found matching your criteria.</p>
            </div>
          )}
        </motion.section>
      </div>
    </div>
  );
};

export default Projects;

