import { useEffect, useReducer, useRef } from 'react';
import toast from 'react-simple-toasts';
import { searchMovies } from 'requests/movies';
import useDebouncedCallback from '../debouncedCallback';
import { initAction, initialState, reducer, successAction } from './reducer';

function useSearchMovies(query: string) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetcher = useDebouncedCallback(searchMovies);
  const abortController = useRef(new AbortController());

  useEffect(() => {
    if (!query) {
      return;
    }

    dispatch(initAction());

    abortController.current.abort();
    abortController.current = new AbortController();
    fetcher(query, abortController.current.signal)
      .then(data => {
        dispatch(successAction(data));
      })
      .catch(({ message }) => {
        if (message !== 'canceled') {
          toast('Error in search movies. please try again.');
        }
      });
  }, [fetcher, query]);

  return state;
}

export default useSearchMovies;
