import classnames from 'classnames';
import styles from './styles.module.scss';

interface Props {
  active: boolean;
  className?: string;
  icon: any;
  label: string;
  onClick: (event) => void;
}

function MovieAction({ active, className, icon: Icon, label, onClick }: Props) {
  return (
    <button
      className={styles.favoriteButton}
      onClick={onClick}
      aria-label={label}>
      <Icon
        className={classnames(styles.svg, className, {
          [styles.active]: active,
        })}
        title={label}
      />
    </button>
  );
}

export default MovieAction;
