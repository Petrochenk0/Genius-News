// library
import React from 'react';
// components
import NewsBanner from '../../components/NewsBanner';
import NewsList from '../../components/NewsList';
// styles
import styles from './styles.module.css';
// functions
import { getNews } from '../../api/apiNews';
import Skeleton from '../../components/Skeleton/Skeleton';
export default function Main() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const responseWithNews = await getNews();
        setNews(responseWithNews.news);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);
  return (
    <div className={styles.main}>
      {news.length > 0 && !loading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={'banner'} count={1} />
      )}
      {loading ? <Skeleton type={'item'} count={10} /> : <NewsList news={news} />}
    </div>
  );
}
