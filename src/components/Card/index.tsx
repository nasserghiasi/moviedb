import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

function Card({ children }: Props) {
  return <div className={styles.card}>{children}</div>;
}

export default Card;
