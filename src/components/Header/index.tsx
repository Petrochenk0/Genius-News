// library
import React from 'react';
// tools
import { formatDate } from '../../helpers/formatDate';
// styles
import styles from './styles.module.css';
export default function Header() {
  const [currentData, setCurrentData] = React.useState(new Date());

  React.useEffect(() => {
    const everyMomentUpdata = setInterval(() => {
      setCurrentData(new Date());
    }, 1000);

    return () => {
      clearInterval(everyMomentUpdata);
    };
  }, []);

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>GENIUS NEWS</h1>
      <p className={styles.date}>{formatDate(currentData)}</p>
    </div>
  );
}
