import { useCallback, useRef } from 'react';
import { Fetcher } from './dataRequest';

function useDebouncedCallback<D>(
  callback: Fetcher<D>,
  delay = 500
): Fetcher<D> {
  const timeoutRef = useRef<NodeJS.Timeout>();

  return useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      return new Promise<D>(resolve => {
        timeoutRef.current = setTimeout(() => {
          resolve(callback(...args));
        }, delay);
      });
    },
    [callback, delay]
  );
}

export default useDebouncedCallback;
