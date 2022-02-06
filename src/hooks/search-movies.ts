import useDebouncedCallback from './debounced-callback';
import { searchMovies } from '../requests/movies';
import { useEffect, useState } from 'react';
import { Movie } from '../models/movie';

function useSearchMovies(query: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const fetcher = useDebouncedCallback(searchMovies);

  useEffect(() => {
    fetcher(query).then(data => {
      setMovies(data);
    });
  }, [query]);

  return {
    movies,
  };
}

export default useSearchMovies;
