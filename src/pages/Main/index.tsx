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
import Pagination from '../../components/Pagination';
export default function Main() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  const onePageNews = 10;
  const quantityPages = 10;

  const fetchNews = async (page_number: number) => {
    try {
      setLoading(true);
      const responseWithNews = await getNews(page_number, quantityPages);
      setNews(responseWithNews.news);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const pageForward = () => {
    if (currentPage < onePageNews) {
      setCurrentPage(currentPage + 1);
      console.log(currentPage);
    }
  };

  const pageBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      console.log(currentPage);
    }
  };

  const pageSelection = (selectionPageArgument: number) => {
    setCurrentPage(selectionPageArgument);
  };

  React.useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  return (
    <div className={styles.main}>
      {news.length > 0 && !loading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={'banner'} count={1} />
      )}
      <Pagination
        quantityPages={quantityPages}
        pageForward={pageForward}
        pageBack={pageBack}
        pageSelection={pageSelection}
        currentPage={currentPage}
      />
      {loading ? <Skeleton type={'item'} count={10} /> : <NewsList news={news} />}
    </div>
  );
}
