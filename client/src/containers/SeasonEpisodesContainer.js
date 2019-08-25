import React from 'react';
import { connect } from 'react-redux';
import { fetchMediaEpisodes, updateTodoSeason } from '../actions';

import EpisodesList from '../components/MediaDetails/EpisodesList';


class SeasonEpisodeContainer extends React.Component {
  componentDidMount() {
    const { mediaId, selectedSeason } = this.props;

    this.props.fetchMediaEpisodes(mediaId, selectedSeason);
  }

  componentDidUpdate(prevProps) {
    const { mediaId, selectedSeason } = this.props;

    if (selectedSeason !== prevProps.selectedSeason) {
      this.props.fetchMediaEpisodes(mediaId, selectedSeason);
    }
  }


  toggleEpisodeStatus = (event, ownProps) => {
    const { mediaId, selectedSeason, selectedTodo } = this.props;
    let doneEpisodes = [];

    // Init season episodes status
    if (
      selectedTodo
      && selectedTodo.seasons
      && selectedTodo.seasons[selectedSeason]
    ) {
      doneEpisodes = selectedTodo.seasons[selectedSeason].done_episodes;
    }

    // Add or remove episode
    const uniqueEpisodes = new Set(doneEpisodes);
    if (ownProps.checked) {
      uniqueEpisodes.add(ownProps.episode);
    } else {
      uniqueEpisodes.delete(ownProps.episode);
    }

    this.props.updateTodoSeason(mediaId, 'tv', {
      [selectedSeason]: { done_episodes: [...uniqueEpisodes] },
    });
  }


  render() {
    const { selectedSeason, episodes, selectedTodo } = this.props;

    if (!episodes) {
      return (
        <div>Loading…</div>
      );
    }

    return (
      <EpisodesList
        episodes={episodes}
        onCheckboxChange={this.toggleEpisodeStatus}
        selectedSeason={selectedSeason}
        todo={selectedTodo}
      />
    );
  }
}


const mapStateToProps = (state) => ({
  episodes: state.mediaEpisodes,
  selectedTodo: state.selectedTodo,
});

export default connect(
  mapStateToProps,
  { fetchMediaEpisodes, updateTodoSeason },
)(SeasonEpisodeContainer);
