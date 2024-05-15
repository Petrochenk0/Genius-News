// styles
import styles from './styles.module.css';
export default function Search({ keywords, setKeywords }) {
  // {}?
  return (
    <div>
      <input type="text" className={styles.input} placeholder="Search..." />
    </div>
  );
}
