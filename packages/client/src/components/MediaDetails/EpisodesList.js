import React from 'react';
import { Checkbox, Table } from 'semantic-ui-react';

const EpisodesList = (props) => {
  const {
    episodes,
    onCheckboxChange,
    selectedSeason,
    todo,
  } = props;

  const renderList = () => {
    let doneEpisodes;
    if (todo && todo.seasons && todo.seasons[selectedSeason]) {
      doneEpisodes = todo.seasons[selectedSeason].done_episodes;
    }

    return episodes.map((episode) => {
      let checked = false;

      // If complete media done, mark each episode as done
      if (todo.done === true) checked = true;
      // Else, check if the individual episode is done
      else if (doneEpisodes) {
        checked = Boolean(doneEpisodes.find((el) => el === episode.episode_number));
      }

      return (
        <Table.Row key={episode.id}>
          <Table.Cell>{episode.episode_number}</Table.Cell>
          <Table.Cell>{episode.name}</Table.Cell>
          <Table.Cell>{episode.air_date}</Table.Cell>
          <Table.Cell>
            <Checkbox
              checked={checked}
              episode={episode.episode_number}
              onChange={onCheckboxChange}
            />
          </Table.Cell>
        </Table.Row>
      );
    });
  };

  return (
    <Table basic="very" striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>No.</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Air Date</Table.HeaderCell>
          <Table.HeaderCell>Watched?</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {renderList()}
      </Table.Body>
    </Table>
  );
};

export default EpisodesList;
