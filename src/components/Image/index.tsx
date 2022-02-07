import React, { ImgHTMLAttributes } from 'react';
import noImage from 'assets/no-image-placeholder.png';
import { POSTERS_ENDPOINT } from 'configs/configs';

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

  return POSTERS_ENDPOINT + path;
}

export default Image;
