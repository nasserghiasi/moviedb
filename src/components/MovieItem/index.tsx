import React, { useCallback, useState } from 'react';
import { Movie } from '../../models/movie';
import styles from './styles.module.scss';
import Image from '../Image';
import Card from '../Card';
import classnames from 'classnames';
import MovieAction from '../MovieAction';
import { ReactComponent as Star } from '../../assets/icons/star.svg';
import { ReactComponent as WatchLater } from '../../assets/icons/plus.svg';
import movieStorage, { StorageKeys } from '../../services/movieStorage';
import toast from 'react-simple-toasts';

interface Props {
  data: Movie;
  className?: string;
  onChange?: (item: Movie) => void;
}

function MovieItem({ data, className, onChange }: Props) {
  const [favorite, setFavorite] = useState(
    movieStorage.findInFavorites(data.id)
  );
  const [watchListed, setWatchList] = useState(
    movieStorage.findInWatchList(data.id)
  );

  const handleToggleFavorite = useCallback(() => {
    if (favorite) {
      movieStorage.remove(StorageKeys.FAVORITE, data.id);
    } else {
      movieStorage.set(StorageKeys.FAVORITE, data);
      toast(`${data.title} added to your favorites list`);
    }

    setFavorite(state => !state);

    if (onChange) {
      onChange(data);
    }
  }, [favorite]);

  const handleToggleWatchList = useCallback(() => {
    if (watchListed) {
      movieStorage.remove(StorageKeys.WATCH_LIST, data.id);
    } else {
      movieStorage.set(StorageKeys.WATCH_LIST, data);
      toast(`${data.title} added to your watch list`);
    }

    setWatchList(state => !state);

    if (onChange) {
      onChange(data);
    }
  }, [watchListed]);

  return (
    <div className={classnames(styles.movieItem, className)}>
      <Card>
        <Image
          className={styles.poster}
          src={data.poster_path}
          alt={data.title}
        />
        <div className={styles.content}>
          <h2 className={styles.title} title={data.title}>
            {data.title}
          </h2>
          <small>Release: {data.release_date}</small>
        </div>

        <div className={styles.actions}>
          <MovieAction
            label="Watch Later"
            icon={WatchLater}
            active={watchListed}
            onClick={handleToggleWatchList}
          />
          <MovieAction
            label="Favorite"
            icon={Star}
            active={favorite}
            onClick={handleToggleFavorite}
          />
        </div>
      </Card>
    </div>
  );
}

export type { Props as MovieItemProps };

export default MovieItem;
