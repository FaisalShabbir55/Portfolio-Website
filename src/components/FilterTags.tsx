import { motion } from 'framer-motion';
import './FilterTags.css';

interface FilterTagsProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const FilterTags = ({ categories, selected, onSelect }: FilterTagsProps) => {
  return (
    <div className="filter-tags">
      {categories.map((category) => (
        <motion.button
          key={category}
          className={`filter-tag ${selected === category ? 'active' : ''}`}
          onClick={() => onSelect(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterTags;

