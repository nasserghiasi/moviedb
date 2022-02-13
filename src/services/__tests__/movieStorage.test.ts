import movieStorage, { StorageKeys } from '../movieStorage';
import { Movie } from 'models/movie';
import storage from '../storage';

const movies: Movie[] = [
  {
    adult: false,
    backdrop_path: '/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg',
    genre_ids: [16, 12, 10751, 35],
    id: 863,
    original_language: 'en',
    original_title: 'Toy Story 2',
    overview: 'test',
    popularity: 196.795,
    poster_path: '/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg',
    release_date: '1995-10-30',
    title: 'Toy Story 2',
    video: false,
    vote_average: 8,
    vote_count: 14994,
    created_at: 'Mon, 07 Feb 2022 09:06:40 GMT',
  },
  {
    adult: false,
    backdrop_path: '/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg',
    genre_ids: [16, 12, 10751, 35],
    id: 862,
    original_language: 'en',
    original_title: 'Toy Story',
    overview: 'test',
    popularity: 196.795,
    poster_path: '/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg',
    release_date: '1995-10-30',
    title: 'Toy Story',
    video: false,
    vote_average: 8,
    vote_count: 14994,
    created_at: 'Tue, 08 Feb 2022 09:06:40 GMT',
  },
];

describe('Movie Storage service', () => {
  beforeEach(() => {
    storage.clear();

    movieStorage.set(StorageKeys.FAVORITE, movies[0]);
    movieStorage.set(StorageKeys.FAVORITE, movies[1]);
  });

  test('get movies length in the storage', () => {
    expect(Object.keys(movieStorage.get(StorageKeys.FAVORITE)).length).toBe(2);
  });

  test('find movie', () => {
    expect(movieStorage.findInFavorites(862)).toBeTruthy();
    expect(movieStorage.findInFavorites(860)).toBeFalsy();
    expect(movieStorage.findInWatchList(860)).toBeFalsy();
  });

  test('remove movie from favorites', () => {
    movieStorage.remove(StorageKeys.FAVORITE, 862);
    expect(movieStorage.findInFavorites(862)).toBeFalsy();
  });

  test('add item in favorites', () => {
    storage.clear();

    expect(movieStorage.findInFavorites(862)).toBeFalsy();
    movieStorage.set(StorageKeys.FAVORITE, movies[1]);
    expect(movieStorage.findInFavorites(862)).toBeTruthy();
  });

  test('get sorted array', () => {
    storage.clear();

    movieStorage.set(StorageKeys.FAVORITE, movies[0]);
    movieStorage.set(StorageKeys.FAVORITE, movies[1]);

    expect(movieStorage.getSortedArray(StorageKeys.FAVORITE)[0].id).toBe(862);
  });
});
