import styles from './styles.module.scss';
import { ReactNode } from 'react';

function EmptyList() {
  return <div className={styles.emptyList}>Movies list is empty!</div>;
}

export default EmptyList;
