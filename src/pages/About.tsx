import { motion } from 'framer-motion';
import { useOwnerData } from '../contexts/DataContext';
import Timeline from '../components/Timeline';
import SkillsSection from '../components/SkillsSection';
import InterestsSection from '../components/InterestsSection';
import './About.css';

const About = () => {
  const data = useOwnerData();
  const { owner } = data;

  return (
    <div className="about">
      <div className="container">
        <motion.section
          className="about-hero section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">About Me</h1>
          <div className="story-section">
            <div className="story-content">
              <p className="story-text">{owner.bio}</p>
              <p className="story-text">{owner.story}</p>
            </div>
            {owner.profile_image && (
              <div className="profile-image-wrapper">
                <img
                  src={owner.profile_image}
                  alt={owner.name}
                  className="profile-image"
                />
              </div>
            )}
          </div>
        </motion.section>

        <Timeline items={data.timeline} />

        <SkillsSection skills={data.skills} />

        <InterestsSection interests={data.interests} />
      </div>
    </div>
  );
};

export default About;

