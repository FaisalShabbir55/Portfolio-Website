import { motion } from 'framer-motion';
import { useOwnerData } from '../contexts/DataContext';
import './Education.css';

const Education = () => {
  const data = useOwnerData();

  return (
    <div className="education">
      <div className="container">
        <motion.section
          className="education-header section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Education & Certifications</h1>
          <p className="page-subtitle">Academic background and professional certifications</p>
        </motion.section>

        <section className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="education-list">
            {data.education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="education-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="education-content">
                  <h3 className="education-degree">
                    {edu.degree} in {edu.field}
                  </h3>
                  <h4 className="education-institution">
                    {edu.institution_url ? (
                      <a
                        href={edu.institution_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {edu.institution}
                      </a>
                    ) : (
                      edu.institution
                    )}
                  </h4>
                  <div className="education-meta">
                    <span className="education-location">{edu.location}</span>
                    <span className="education-date">
                      {new Date(edu.start_date).getFullYear()} -{' '}
                      {new Date(edu.end_date).getFullYear()}
                    </span>
                  </div>
                  {edu.gpa && (
                    <p className="education-gpa">GPA: {edu.gpa}</p>
                  )}
                  {edu.honors && edu.honors.length > 0 && (
                    <div className="education-honors">
                      <strong>Honors:</strong> {edu.honors.join(', ')}
                    </div>
                  )}
                  {edu.relevant_coursework && edu.relevant_coursework.length > 0 && (
                    <div className="education-coursework">
                      <strong>Relevant Coursework:</strong>
                      <ul>
                        {edu.relevant_coursework.map((course, idx) => (
                          <li key={idx}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="certifications-section">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            {data.certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="certification-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <h3 className="certification-name">{cert.name}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <div className="certification-meta">
                  <span className="certification-date">
                    Issued: {new Date(cert.issue_date).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                  {cert.expiry_date && (
                    <span className="certification-expiry">
                      Expires: {new Date(cert.expiry_date).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  )}
                </div>
                {cert.credential_url && (
                  <a
                    href={cert.credential_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-link"
                  >
                    Verify Credential
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;

