import { Movie } from '../../models/movie';
import styles from './styles.module.scss';
import Image from '../Image';
import Card from '../Card';
import classnames from 'classnames';

interface Props {
  data: Movie;
  className?: string;
}

function MovieItem({ data, className }: Props) {
  return (
    <div className={classnames(styles.movieItem, className)}>
      <Card>
        <Image
          className={styles.poster}
          src={data.poster_path}
          alt={data.title}
        />
        <div>data</div>
      </Card>
    </div>
  );
}

export default MovieItem;
