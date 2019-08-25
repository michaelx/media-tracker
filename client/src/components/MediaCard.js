import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react';
import imgNoCover from '../images/no_cover.png';

// @TODO: Refactor as global helper function
const getCoverImage = (apiData) => {
  if (!apiData) return imgNoCover;
  return `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${apiData}`;
};

const MediaCard = ({ data, category }) => {
  const title = data.name || data.title;

  return (
    <Card
      as={Link}
      to={`/view/${category}/${data.id}`}
    >
      <Image
        src={getCoverImage(data.poster_path)}
        wrapped
        ui={false}
        alt={`Poster for ${title}`}
      />
      <Card.Content>
        <Card.Header style={{ fontSize: '1.125em' }}>{title}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default MediaCard;
