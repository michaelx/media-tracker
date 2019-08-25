import React from 'react';
import { Grid } from 'semantic-ui-react';

import MediaCard from './MediaCard';

const MediaCardList = ({ items, category }) => {
  const renderSearchResult = items.map((item) => (
    <Grid.Column key={item.id}>
      <MediaCard data={item} category={category} />
    </Grid.Column>
  ));

  return (
    <Grid doubling columns={5}>
      {items.length > 0 && renderSearchResult}
    </Grid>
  );
};

export default MediaCardList;
