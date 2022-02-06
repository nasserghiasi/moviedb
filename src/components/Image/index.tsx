import React, { ImgHTMLAttributes } from 'react';
import noImage from '../../assets/no-image-placeholder.png';

function Image({ src, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      decoding="async"
      loading="lazy"
      src={getPosterUrl(src)}
      {...props}
      alt={alt || 'image not available'}
    />
  );
}

function getPosterUrl(path: string | undefined) {
  if (!path) return noImage;

  return 'https://www.themoviedb.org/t/p/w220_and_h330_face' + path;
}

export default Image;
