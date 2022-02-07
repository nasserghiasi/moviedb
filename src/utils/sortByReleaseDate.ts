import { Movie } from 'models/movie';

export default function sortByCreatedDate(movies: Movie[]) {
  return movies.sort((a, b) =>
    a.created_at && b.created_at
      ? new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      : 0
  );
}
