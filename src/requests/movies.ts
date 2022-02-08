import Http from 'services/Http';
import { SEARCH_MOVIES_ENDPOINT } from 'configs/endpoints';
import { Movie } from 'models/movie';

function searchMovies(query: string, signal?: AbortSignal): Promise<Movie[]> {
  return Http.get(SEARCH_MOVIES_ENDPOINT, { params: { query }, signal }).then(
    ({ data }) => data.results
  );
}

export { searchMovies };
