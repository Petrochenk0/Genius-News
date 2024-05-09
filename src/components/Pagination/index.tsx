// library
import React from 'react';
// styles
import styles from './styles.module.css';

type PaginastionProps = {
  onePageNews: number;
};

export default function Pagination({ onePageNews }: PaginastionProps) {
  return (
    <div>
      <button>{`<`}</button>
      <div>
        {[...Array(onePageNews)].map((_, index) => {
          return <button key={index}>{index + 1}</button>;
        })}
      </div>
      <button>{`>`}</button>
    </div>
  );
}
