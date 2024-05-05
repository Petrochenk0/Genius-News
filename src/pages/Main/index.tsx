// library
import React from 'react';
// components
import NewsBanner from '../../components/NewsBanner';
import NewsList from '../../components/NewsList';
// styles
import styles from './styles.module.css';
// functions
import { getNews } from '../../api/apiNews';
export default function Main() {
  const [news, setNews] = React.useState([]);
  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        const responseWithNews = await getNews();

        setNews(responseWithNews.news);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);
  return (
    <div className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
      <NewsList news={news} />
    </div>
  );
}
