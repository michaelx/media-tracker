import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react';
import { getCoverImage } from '../helpers/utils';

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
