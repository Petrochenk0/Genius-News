import styles from './styles.module.css';

type PaginastionProps = {
  quantityPages: number;
  pageForward: () => void;
  pageBack: () => void;
  pageSelection: (selectionPageArgument: number) => void;
  currentPage: number;
};

export default function Pagination({
  quantityPages,
  pageForward,
  pageBack,
  pageSelection,
  currentPage,
}: PaginastionProps) {
  return (
    <div className={styles.pagination}>
      <button
        onClick={pageBack}
        className={styles.arrow}
        disabled={currentPage === 1}>{`<`}</button>
      <div className={styles.list}>
        {[...Array(quantityPages)].map((_, index) => {
          return (
            <button
              onClick={() => pageSelection(index + 1)}
              className={styles.onePageOfNewsItems}
              disabled={index + 1 === currentPage}
              key={index}>
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        onClick={pageForward}
        className={styles.arrow}
        disabled={currentPage === quantityPages}>{`>`}</button>
    </div>
  );
}
