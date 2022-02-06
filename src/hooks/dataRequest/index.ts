import {
  Action,
  errorAction,
  initAction,
  initialState,
  reducer,
  retryAction,
  State,
  successAction,
} from './reducer';
import { useCallback, useEffect, useReducer, useRef } from 'react';

export type Fetcher<D> = (...args: any[]) => Promise<D>;

function useDataRequest<D>(fetcher: Fetcher<D>) {
  const fetcherRef = useRef<Fetcher<D>>();

  const [state, dispatch] = useReducer(reducer<D>(), initialState);

  const retry = useCallback(() => {
    dispatch(retryAction());
  }, []);

  const callFetcher = useCallback(() => {
    if (fetcherRef.current) {
      fetcherRef
        .current()
        .then(data => {
          return dispatch(successAction(data));
        })
        .catch(error => {
          dispatch(errorAction(error));

          throw new Error(error);
        });
    }
  }, [fetcherRef.current]);

  useEffect(() => {
    fetcherRef.current = fetcher;
  }, [fetcher]);

  useEffect(() => {
    if (state.isInitialized) {
      return;
    }

    dispatch(initAction());

    callFetcher();
  }, [state.isInitialized]);

  return { ...state, retry };
}

export default useDataRequest;
