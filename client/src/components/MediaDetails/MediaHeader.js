import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Divider,
  Grid,
  Image,
  Label,
  Popup,
} from 'semantic-ui-react';
import { getCoverImage } from '../../helpers/utils';


const MediaHeader = (props) => {
  const {
    category,
    handleUpdate,
    mediaData,
    todo,
  } = props;

  const {
    genres,
    id,
    name: title = mediaData.title,
    number_of_episodes: numberOfEpisodes,
    number_of_seasons: numberOfSeasons,
    overview,
    poster_path: posterPath,
    release_date: releaseDate,
    status,
    vote_average: voteAverage,
    vote_count: voteCount,
  } = mediaData;

  const imgCover = getCoverImage(posterPath);


  const renderTrackButton = () => {
    const trackButton = {
      text: 'Track',
      boolValue: true,
    };

    if (todo && todo.tracked === true) {
      trackButton.text = 'Untrack';
      trackButton.boolValue = false;
    }

    return (
      <Button
        negative={!trackButton.boolValue}
        onClick={() => handleUpdate({ tracked: trackButton.boolValue })}
        primary={trackButton.boolValue}
      >
        {trackButton.text}
      </Button>
    );
  };


  const renderStatusButton = () => {
    const statusButton = {
      text: 'watched',
      boolValue: true,
    };

    if (todo && todo.done === true) {
      statusButton.text = 'unwatched';
      statusButton.boolValue = false;
    }

    return (
      <Button
        negative={!statusButton.boolValue}
        onClick={() => handleUpdate({ done: statusButton.boolValue })}
        primary={statusButton.boolValue}
      >
        Mark as {statusButton.text}
      </Button>
    );
  };

  const renderTVLabels = () => (
    <React.Fragment>
      <Label>
        Seasons
        <Label.Detail>{numberOfSeasons}</Label.Detail>
      </Label>
      <Label>
        Episodes
        <Label.Detail>{numberOfEpisodes}</Label.Detail>
      </Label>
    </React.Fragment>
  );

  const renderScore = () => (
    <Popup
      content={`${voteCount} votes`}
      position="bottom center"
      size="small"
      trigger={
        <Label>
          Score
          <Label.Detail>{voteAverage}</Label.Detail>
        </Label>
      }
    />
  );

  const renderGenres = () => (
    <Label>
      Genre{genres.length > 1 && 's'}
      <Label.Detail>{genres.map((genre) => genre.name).join(', ')}</Label.Detail>
    </Label>
  );


  return (
    <Grid.Row style={{ backgroundColor: 'rgba(0,0,50,.02)' }}>
      <Grid.Column width={3}>
        <Image src={imgCover} />
      </Grid.Column>
      <Grid.Column width={13}>
        <h2>{title}</h2>
        <p>{overview}</p>
        <div>
          {category === 'tv' && renderTVLabels()}
          <Label>
            {status}
            {category === 'movie' && <Label.Detail>{releaseDate}</Label.Detail>}
          </Label>
          {voteCount >= 10 && renderScore()}
          {genres.length > 0 && renderGenres()}
        </div>

        <Divider hidden />

        {renderTrackButton()}
        {renderStatusButton()}
        <Button
          as={Link}
          to={`/discover/related/${category}/${id}`}
         >
          Related media
        </Button>
      </Grid.Column>
    </Grid.Row>
  );
};

export default MediaHeader;
