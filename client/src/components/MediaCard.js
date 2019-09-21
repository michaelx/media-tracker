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
        alt={`Poster for ${title}`}
        src={getCoverImage(data.poster_path)}
        ui={false}
        wrapped
      />
      <Card.Content>
        <Card.Header style={{ fontSize: '1.125em' }}>{title}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default MediaCard;
