import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageGallery.css';

interface ImageGalleryProps {
  images: string[];
  title?: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <div className="image-gallery">
      {title && <h3 className="gallery-title">{title}</h3>}
      <div className="gallery-main">
        {images.length > 1 && (
          <button
            className="gallery-nav gallery-nav-prev"
            onClick={prevImage}
            aria-label="Previous image"
          >
            ‹
          </button>
        )}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title || 'Project'} image ${currentIndex + 1}`}
            className="gallery-image"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        {images.length > 1 && (
          <button
            className="gallery-nav gallery-nav-next"
            onClick={nextImage}
            aria-label="Next image"
          >
            ›
          </button>
        )}
      </div>
      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`gallery-thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
      {images.length > 1 && (
        <div className="gallery-indicator">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

