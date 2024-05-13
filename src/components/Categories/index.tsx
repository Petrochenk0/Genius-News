// library
import React from 'react';
// styles
import styles from './styles.module.css';

type CategoriesProps = {
  categories: string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
};

export default function Categories({
  categories,
  setSelectedCategory,
  selectedCategory,
}: CategoriesProps) {
  return (
    <div className={styles.categories}>
      {categories.map((category: string) => {
        return (
          <button
            onClick={() => setSelectedCategory(category)}
            key={category}
            className={selectedCategory === category ? styles.active : styles.item}>
            {category}
          </button>
        );
      })}
    </div>
  );
}
