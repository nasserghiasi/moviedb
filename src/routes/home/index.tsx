import styles from './styles.module.scss';
import { useCallback, useEffect, useState } from 'react';
import Input from '../../components/Input';
import useSearchMovies from '../../hooks/searchMovie';
import MoviesList from '../../components/MoviesList';
import Spinner from '../../components/Spinner';

function Home() {
  const [query, setQuery] = useState('Toy Story');
  const { data, isSuccess, isPending } = useSearchMovies(query);

  const handChangeQuery = useCallback(event => {
    setQuery(event.target.value);
  }, []);

  return (
    <div>
      <div className={styles.searchInputContainer}>
        <Input value={query} onChange={handChangeQuery} type="search" />
      </div>
      {isSuccess && (
        <div className={styles.moviesList}>
          <MoviesList movies={data} />
        </div>
      )}

      {isPending && (
        <div className={styles.loading}>
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default Home;
