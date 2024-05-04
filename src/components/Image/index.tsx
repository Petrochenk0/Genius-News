import styles from './styles.module.css';

export default function Image({ image }) {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} className={styles.image} /> : ''}
    </div>
  );
}
