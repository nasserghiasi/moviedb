import { useCallback, useState } from 'react';
import MoviesList from 'components/MoviesList';
import movieStorage, { StorageKeys } from 'services/movieStorage';
import sortByCreatedDate from 'utils/sortByReleaseDate';
import EmptyList from 'components/EmptyList';
import styles from './styles.module.scss';

function Favorites() {
  const [movies, setMovies] = useState(getMovies());

  const hasMovies = movies.length > 0;

  const handleChange = useCallback(() => {
    setMovies(getMovies());
  }, []);

  return (
    <div className={styles.moviesList}>
      {hasMovies ? (
        <MoviesList onChange={handleChange} movies={movies} />
      ) : (
        <EmptyList />
      )}
    </div>
  );
}

function getMovies() {
  return sortByCreatedDate(movieStorage.getArray(StorageKeys.FAVORITE));
}

export default Favorites;
