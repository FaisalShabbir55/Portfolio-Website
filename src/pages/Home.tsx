import { motion } from 'framer-motion';
import { useOwnerData } from '../contexts/DataContext';
import { useParallax } from '../hooks/useParallax';
import Button from '../components/Button';
import ScrollIndicator from '../components/ScrollIndicator';
import AnimatedTagline from '../components/AnimatedTagline';
import SocialLinks from '../components/SocialLinks';
import StatsSection from '../components/StatsSection';
import QuickIntro from '../components/QuickIntro';
import FeaturedProjectsPreview from '../components/FeaturedProjectsPreview';
import SkillsPreview from '../components/SkillsPreview';
import './Home.css';

const Home = () => {
  const data = useOwnerData();
  const { owner, cta } = data;
  const parallaxStyle = useParallax({ speed: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section
        className="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-background">
          <div className="hero-gradient" style={parallaxStyle}></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <motion.div className="hero-main">
              <motion.div className="hero-text" variants={itemVariants}>
                <motion.h1
                  className="hero-name"
                  variants={nameVariants}
                >
                  <span className="name-greeting">Hi, I'm</span>
                  <span className="name-main">{owner.name}</span>
                </motion.h1>
                <motion.p
                  className="hero-title"
                  variants={itemVariants}
                >
                  {owner.title}
                </motion.p>
                <motion.div variants={itemVariants}>
                  <AnimatedTagline taglines={owner.taglines} />
                </motion.div>
                <motion.div
                  className="hero-cta"
                  variants={itemVariants}
                >
                  <Button
                    to={cta.primary.link}
                    variant="primary"
                  >
                    {cta.primary.text}
                  </Button>
                  <Button
                    to={cta.secondary.link}
                    variant="secondary"
                  >
                    {cta.secondary.text}
                  </Button>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <SocialLinks />
                </motion.div>
              </motion.div>

              {owner.profile_image && (
                <motion.div
                  className="hero-image-wrapper"
                  variants={itemVariants}
                >
                  <div className="hero-image-frame">
                    <img
                      src={owner.profile_image}
                      alt={owner.name}
                      className="hero-image"
                    />
                    <div className="hero-image-glow"></div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
        <ScrollIndicator />
      </motion.section>

      {/* Stats Section */}
      <StatsSection />

      {/* Quick Intro Section */}
      <QuickIntro />

      {/* Featured Projects Preview */}
      <FeaturedProjectsPreview />

      {/* Skills Preview */}
      <SkillsPreview />
    </div>
  );
};

export default Home;
