import styles from './styles.module.css';

type SkeletonProps = {
  count: number;
  type: 'banner' | 'item';
};

export default function Skeleton({ count = 1, type }: SkeletonProps) {
  console.log(count, type);

  return (
    <div>
      {count > 1 ? (
        <ul className={styles.list}>
          {[...Array(count)].map((_, index) => {
            return (
              <li key={index} className={type === 'banner' ? styles.banner : styles.item}></li>
            );
          })}
        </ul>
      ) : (
        <li className={type === 'banner' ? styles.banner : styles.item}></li>
      )}
    </div>
  );
}
