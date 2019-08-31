import imgNoCover from '../images/no_cover.png';

/* eslint-disable import/prefer-default-export */
export const getCoverImage = (src) => {
  if (!src) return imgNoCover;
  return `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${src}`;
};
/* eslint-enable import/prefer-default-export */
