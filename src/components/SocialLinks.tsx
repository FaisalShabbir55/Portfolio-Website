import { motion } from 'framer-motion';
import { useOwnerData } from '../contexts/DataContext';
import './SocialLinks.css';

const SocialLinks = () => {
  const data = useOwnerData();

  const socialLinks = [
    { name: 'GitHub', url: data.social_links.github, icon: '🔗' },
    { name: 'LinkedIn', url: data.social_links.linkedin, icon: '💼' },
    { name: 'Twitter', url: data.social_links.twitter, icon: '🐦' },
    { name: 'Instagram', url: data.social_links.instagram, icon: '📷' },
  ].filter((link) => link.url);

  return (
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={link.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + 1, duration: 0.3 }}
          whileHover={{ scale: 1.2, y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="social-icon">{link.icon}</span>
          <span className="social-name">{link.name}</span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;

