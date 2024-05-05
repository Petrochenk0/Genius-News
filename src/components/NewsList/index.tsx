import styles from './styles.module.css';

type NewsItem = {
  id: number;
  title: string;
};

type NewsListProps = NewsItem[];

export default function NewsList({ news }: { news: NewsListProps }) {
  return (
    <ul className={styles.list}>
      {news.map((item: NewsItem) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}
