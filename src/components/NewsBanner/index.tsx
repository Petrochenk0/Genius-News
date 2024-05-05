import styles from './styles.module.css';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../Image';

type NewsItem = {
  image?: string;
  title: string;
  published: string;
  author: string;
};

export default function NewsBanner({ item }: { item: NewsItem }) {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
}
