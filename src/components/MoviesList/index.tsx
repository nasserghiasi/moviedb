import { Movie } from 'models/movie';
import MovieItem, { MovieItemProps } from '../MovieItem';
import styles from './styles.module.scss';

interface Props {
  movies: Movie[];
  onChange?: MovieItemProps['onChange'];
}

function MoviesList({ movies, onChange }: Props) {
  return (
    <div className={styles.results}>
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          onChange={onChange}
          className={styles.movieItem}
          data={movie}
        />
      ))}
    </div>
  );
}

export default MoviesList;
