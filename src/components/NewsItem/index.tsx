import styles from './styles.module.css';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';

type NewsItem = {
  image?: string;
  title: string;
  published: string;
  author: string;
};

export default function NewsItem({ item }: { item: NewsItem }) {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper} style={{ backgroundImage: `url(${item.image})` }}></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
}
