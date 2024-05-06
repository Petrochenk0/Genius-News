import NewsItem from '../NewsItem';
import styles from './styles.module.css';

type NewsItemProps = {
  id: number;
  title: string;
  published: string;
  author: string;
};

type NewsListProps = NewsItemProps[];

export default function NewsList({ news }: { news: NewsListProps }) {
  return (
    <ul className={styles.list}>
      {news.map((item: NewsItemProps) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
}
