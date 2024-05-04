import React from 'react';
import NewsBanner from '../../components/NewsBanner/index';
import styles from './styles.module.css';
import { getNews } from '../../api/apiNews';
export default function Main() {
  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getNews();
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
  return (
    <div className={styles.main}>
      <NewsBanner />
    </div>
  );
}
