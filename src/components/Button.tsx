import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  onClick?: (e?: React.MouseEvent) => void;
  type?: 'button' | 'submit';
  className?: string;
}

const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) => {
  const buttonClasses = `button button-${variant} ${className}`;

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="button-content"
    >
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
    >
      {buttonContent}
    </button>
  );
};

export default Button;

