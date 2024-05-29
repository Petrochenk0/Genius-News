import { Dispatch, SetStateAction } from 'react';

import styles from './styles.module.css';

type SearchTypes = {
  keywords: string;
  setKeywords: Dispatch<SetStateAction<string>>;
};

export default function Search({ keywords, setKeywords }: SearchTypes) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search..."
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
    </div>
  );
}
