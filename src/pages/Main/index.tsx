// library
import React from 'react';
// components
import NewsBanner from '../../components/NewsBanner';
import NewsList from '../../components/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination';
// styles
import styles from './styles.module.css';
// functions
import { getCategories, getNews } from '../../api/apiNews';

export default function Main() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [categories, setCategories] = React.useState<string[]>([]);

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

  const fetchCategories = async () => {
    try {
      const responseWithCategories = await getCategories();
      console.log(responseWithCategories);

      setCategories(['All', ...responseWithCategories.categories]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(categories);

  React.useEffect(() => {
    fetchCategories();
  }, []);

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
      <Pagination
        quantityPages={quantityPages}
        pageForward={pageForward}
        pageBack={pageBack}
        pageSelection={pageSelection}
        currentPage={currentPage}
      />
    </div>
  );
}
