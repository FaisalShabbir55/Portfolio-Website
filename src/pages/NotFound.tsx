import { motion } from 'framer-motion';
import Button from '../components/Button';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <motion.div
          className="not-found-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-description">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button to="/" variant="primary">
            Go Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;

