import { Link } from 'react-router-dom';
import { useOwnerData } from '../contexts/DataContext';
import './Footer.css';

const Footer = () => {
  const data = useOwnerData();

  const socialLinks = [
    { name: 'GitHub', url: data.social_links.github, icon: 'github' },
    { name: 'LinkedIn', url: data.social_links.linkedin, icon: 'linkedin' },
    { name: 'Twitter', url: data.social_links.twitter, icon: 'twitter' },
  ].filter((link) => link.url);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{data.owner.name}</h3>
            <p className="footer-description">{data.owner.title}</p>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-contact">
              <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
            </p>
            <p className="footer-contact">{data.contact.location}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} {data.owner.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

