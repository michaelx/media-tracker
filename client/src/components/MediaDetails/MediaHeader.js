import React from 'react';

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

  // Data mapping
  const title = mediaData.name || mediaData.title;
  const imgCover = getCoverImage(mediaData.poster_path);


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
        primary={trackButton.boolValue}
        negative={!trackButton.boolValue}
        onClick={() => handleUpdate({ tracked: trackButton.boolValue })}
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
        primary={statusButton.boolValue}
        negative={!statusButton.boolValue}
        onClick={() => handleUpdate({ done: statusButton.boolValue })}
      >
        Mark as {statusButton.text}
      </Button>
    );
  };

  /* eslint-disable camelcase */
  const renderTVLabels = ({ number_of_seasons, number_of_episodes }) => (
    <React.Fragment>
      <Label>
        Seasons
        <Label.Detail>{number_of_seasons}</Label.Detail>
      </Label>
      <Label>
        Episodes
        <Label.Detail>{number_of_episodes}</Label.Detail>
      </Label>
    </React.Fragment>
  );

  const renderScore = ({ vote_count, vote_average }) => (
    <Popup
      position="bottom center"
      content={`${vote_count} votes`}
      size="small"
      trigger={
        <Label>
          Score
          <Label.Detail>{vote_average}</Label.Detail>
        </Label>
      }
    />
  );
  /* eslint-enable camelcase */


  return (
    <Grid.Row style={{ backgroundColor: 'rgba(0,0,50,.02)' }}>
      <Grid.Column width={3}>
        <Image src={imgCover} />
      </Grid.Column>
      <Grid.Column width={13}>
        <h2>{title}</h2>
        <p>{mediaData.overview}</p>
        <div>
          {category === 'tv' && renderTVLabels(mediaData)}
          <Label>
            Status
            <Label.Detail>{mediaData.status}</Label.Detail>
          </Label>
          {mediaData.vote_count >= 10 && renderScore(mediaData)}
        </div>

        <Divider hidden />

        {renderTrackButton()}
        {renderStatusButton()}
      </Grid.Column>
    </Grid.Row>
  );
};

export default MediaHeader;
