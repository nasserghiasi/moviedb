import styles from './styles.module.scss';
import { useCallback, useState } from 'react';
import Input from '../../components/Input';
import useSearchMovies from '../../hooks/search-movies';
import MovieItem from '../../components/MovieItem';

function Home() {
  const [query, setQuery] = useState('The Lord of the Rings');
  const { movies } = useSearchMovies(query);

  const handChangeQuery = useCallback(event => {
    setQuery(event.target.value);
  }, []);

  return (
    <div>
      <div className={styles.searchInputContainer}>
        <Input value={query} onChange={handChangeQuery} />
      </div>
      <div className={styles.results}>
        {movies.map(movie => (
          <MovieItem className={styles.movieItem} data={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
