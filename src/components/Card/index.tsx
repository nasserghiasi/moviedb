import styles from './styles.module.scss';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Card({ children }: Props) {
  return <div className={styles.card}>{children}</div>;
}

export default Card;
