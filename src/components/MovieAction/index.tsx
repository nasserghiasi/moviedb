import styles from './styles.module.scss';
import classnames from 'classnames';

interface Props {
  active: boolean;
  className?: string;
  icon: any;
  label: string;
  onClick: (event: MouseEvent) => void;
}

function MovieAction({
  active,
  className,
  icon: Icon,
  label,
  ...props
}: Props) {
  return (
    <Icon
      className={classnames(styles.favorite, className, {
        [styles.active]: active,
      })}
      title={label}
      aria-checked={active}
      aria-label={label}
      {...props}
    />
  );
}

export default MovieAction;
