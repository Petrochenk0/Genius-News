import styles from './styles.module.css';

type ImageProps = {
  image?: string;
};

export default function Image({ image }: ImageProps) {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} className={styles.image} /> : ''}
    </div>
  );
}
