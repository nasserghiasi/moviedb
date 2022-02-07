import movieStorage, { StorageKeys } from '../movieStorage';
import { Movie } from 'models/movie';

const movie: Movie = {
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
};

describe('Movie Storage service', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.localStorage.setItem('FAVORITE', '{"123": {"title": "test title"}}');
  });

  test('one movie in the storage', () => {
    expect(movieStorage.get(StorageKeys.FAVORITE)).toStrictEqual({
      123: {
        title: 'test title',
      },
    });
  });

  test('find movie', () => {
    expect(movieStorage.findInFavorites(123)).toBeTruthy();
    expect(movieStorage.findInFavorites(124)).toBeFalsy();
    expect(movieStorage.findInWatchList(123)).toBeFalsy();
  });

  test('remove movie from favorites', () => {
    movieStorage.remove(StorageKeys.FAVORITE, 123);
    expect(movieStorage.findInFavorites(123)).toBeFalsy();
  });

  test('remove item in favorites', () => {
    expect(movieStorage.findInFavorites(862)).toBeFalsy();
    movieStorage.set(StorageKeys.FAVORITE, movie);
    expect(movieStorage.findInFavorites(862)).toBeTruthy();
  });

  test('get array', () => {
    expect(movieStorage.getArray(StorageKeys.FAVORITE)).toStrictEqual([
      {
        title: 'test title',
      },
    ]);
  });
});
