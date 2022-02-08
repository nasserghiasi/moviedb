import { Movie } from 'models/movie';
import storage from './storage';

export enum StorageKeys {
  FAVORITE = 'FAVORITE',
  WATCH_LIST = 'WATCH_LIST',
}

type Movies = Record<string, Movie>;

const movieStorage = {
  get(key: StorageKeys): Movies {
    const movies = storage.get(key);

    return movies ?? {};
  },
  set(key: StorageKeys, item: Movie) {
    const movies = this.get(key);

    movies[item.id] = {
      ...item,
      created_at: new Date().toUTCString(),
    };

    storage.set(key, movies);
  },
  remove(key: StorageKeys, id: number) {
    const movies = this.get(key);

    Reflect.deleteProperty(movies, id);

    storage.set(key, movies);
  },
  findItem(key: StorageKeys, id: number) {
    const items = this.get(key);

    return Boolean(items[id]);
  },
  findInFavorites(id: number) {
    return this.findItem(StorageKeys.FAVORITE, id);
  },
  findInWatchList(id: number) {
    return this.findItem(StorageKeys.WATCH_LIST, id);
  },
  getArray(key: StorageKeys) {
    return Object.values(this.get(key));
  },
  getSortedArray(key: StorageKeys) {
    return this.sortByCreatedDate(this.getArray(key));
  },
  sortByCreatedDate(movies: Movie[]) {
    return movies.sort((a, b) =>
      a.created_at && b.created_at
        ? new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        : 0
    );
  },
};

export default movieStorage;
