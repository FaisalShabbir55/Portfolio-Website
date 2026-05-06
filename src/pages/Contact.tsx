import { useState } from 'react';
import { motion } from 'framer-motion';
import { useOwnerData } from '../contexts/DataContext';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  const data = useOwnerData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Format message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Subject:* ${formData.subject}\n\n` +
      `*Message:*\n${formData.message}`;

    // Get WhatsApp number from data or use default
    const whatsappNumber = data.contact.whatsapp || '+923166800572';
    
    // Remove + and spaces from phone number for WhatsApp URL
    const cleanNumber = whatsappNumber.replace(/[\s+]/g, '');
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    try {
      window.open(whatsappUrl, '_blank');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { name: 'GitHub', url: data.social_links.github },
    { name: 'LinkedIn', url: data.social_links.linkedin },
    { name: 'Twitter', url: data.social_links.twitter },
    { name: 'Email', url: `mailto:${data.contact.email}` },
  ].filter((link) => link.url);

  return (
    <div className="contact">
      <div className="container">
        <motion.section
          className="contact-header section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            {data.owner.availability.status} - {data.owner.availability.response_time}
          </p>
        </motion.section>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="contact-info-title">Let's Connect</h2>
            <p className="contact-info-text">
              {data.owner.availability.preferred_contact}
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <strong>Email:</strong>
                <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
              </div>
              {data.contact.phone && (
                <div className="contact-detail">
                  <strong>Phone:</strong>
                  <a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a>
                </div>
              )}
              {data.contact.whatsapp && (
                <div className="contact-detail">
                  <strong>WhatsApp:</strong>
                  <a
                    href={`https://wa.me/${data.contact.whatsapp.replace(/[\s+]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.contact.whatsapp}
                  </a>
                </div>
              )}
              <div className="contact-detail">
                <strong>Location:</strong>
                <span>{data.contact.location}</span>
              </div>
            </div>

            <div className="social-links-section">
              <h3>Follow Me</h3>
              <div className="social-links-grid">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    href={link.url}
                    variant="secondary"
                  >
                    {link.name}
                  </Button>
                ))}
              </div>
            </div>

            {data.contact.whatsapp && (
              <div className="whatsapp-section">
                <h3>Quick Contact</h3>
                <Button
                  href={`https://wa.me/${data.contact.whatsapp.replace(/[\s+]/g, '')}`}
                  variant="primary"
                  className="whatsapp-button"
                >
                  💬 Chat on WhatsApp
                </Button>
              </div>
            )}
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="submit-button"
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
            </Button>

            {status === 'success' && (
              <motion.p
                className="form-success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Redirecting to WhatsApp... If it didn't open, please check your WhatsApp.
              </motion.p>
            )}

            {status === 'error' && (
              <motion.p
                className="form-error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

