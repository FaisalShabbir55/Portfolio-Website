import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useOwnerData } from '../contexts/DataContext';

const SEO = () => {
  const location = useLocation();
  const data = useOwnerData();
  const { seo } = data;

  useEffect(() => {
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update title
    document.title = seo.title;

    // Meta tags
    updateMetaTag('description', seo.description);
    updateMetaTag('keywords', seo.keywords.join(', '));
    updateMetaTag('author', seo.author);

    // Open Graph tags
    updateMetaTag('og:title', seo.title, 'property');
    updateMetaTag('og:description', seo.description, 'property');
    updateMetaTag('og:image', seo.og_image, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:url', window.location.href, 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', seo.title);
    updateMetaTag('twitter:description', seo.description);
    updateMetaTag('twitter:image', seo.og_image);
    if (seo.twitter_handle) {
      updateMetaTag('twitter:creator', seo.twitter_handle);
    }
  }, [location, seo]);

  return null;
};

export default SEO;

