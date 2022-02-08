import classnames from 'classnames';
import styles from './styles.module.scss';
import { FunctionComponent, SVGProps } from 'react';

interface Props {
  active: boolean;
  className?: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  label: string;
  onClick: (event) => void;
}

function MovieAction({ active, className, icon: Icon, label, onClick }: Props) {
  return (
    <button
      className={styles.favoriteButton}
      onClick={onClick}
      title={label}
      aria-label={label}>
      <Icon
        className={classnames(styles.svg, className, {
          [styles.active]: active,
        })}
      />
    </button>
  );
}

export default MovieAction;
