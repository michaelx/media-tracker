import React from 'react';
import { connect } from 'react-redux';
import { clearSelectedSeason, selectSeason, updateTodoSeason } from '../actions';

import Seasons from '../components/MediaDetails/Seasons';
import SeasonEpisodesContainer from './SeasonEpisodesContainer';


class SeasonsContainer extends React.Component {
  componentWillUnmount() {
    this.props.clearSelectedSeason();
  }

  onDropdownChange = (event, { value }) => this.props.selectSeason(value);


  getDropdownOptions = (numberOfSeasons) => {
    const dropdownOptions = [];

    // Generate dropdown options
    // Start at 1, as TMDb stores “Specials” on index 0
    for (let i = 1; i <= numberOfSeasons; i++) {
      dropdownOptions.push({
        key: i,
        text: `Season ${i}`,
        value: i,
      });
    }

    return dropdownOptions;
  }


  getSeasonDoneStatus = () => {
    const {
      episodes,
      newestActiveSeason,
      selectedSeason,
      selectedTodo,
    } = this.props;

    // On init, auto-select the newestActiveSeason, if available.
    // Afterwards, use the dropdown selected season.
    const activeSeason = selectedSeason || newestActiveSeason;

    // Init season episodes status
    let doneEpisodes = [];
    if (
      selectedTodo
      && selectedTodo.seasons
      && selectedTodo.seasons[activeSeason]
    ) {
      doneEpisodes = selectedTodo.seasons[activeSeason].done_episodes;
    }

    if (doneEpisodes.length === episodes.length) return true;

    return false;
  }


  toggleSeasonStatus = () => {
    const {
      episodes,
      mediaId,
      newestActiveSeason,
      selectedSeason,
    } = this.props;

    const activeSeason = selectedSeason || newestActiveSeason;
    const doneEpisodes = [];
    const seasonDoneStatus = this.getSeasonDoneStatus();

    // Add all episodes to done
    if (!seasonDoneStatus) {
      for (let i = 1; i <= episodes.length; i++) doneEpisodes.push(i);
    }

    const addSeasonData = {
      [activeSeason]: { done_episodes: doneEpisodes },
    };

    this.props.updateTodoSeason(mediaId, 'tv', addSeasonData);
  }


  render() {
    const {
      mediaId,
      newestActiveSeason,
      numberOfSeasons,
      selectedSeason,
    } = this.props;

    const activeSeason = selectedSeason || newestActiveSeason;

    return (
      <React.Fragment>
        <Seasons
          buttonOnClick={this.toggleSeasonStatus}
          dropdownOnChange={this.onDropdownChange}
          dropdownOptions={this.getDropdownOptions(numberOfSeasons)}
          seasonDoneStatus={this.getSeasonDoneStatus()}
          selectedSeason={activeSeason}
        />
        <SeasonEpisodesContainer
          mediaId={mediaId}
          selectedSeason={activeSeason}
        />
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => ({
  episodes: state.mediaEpisodes,
  selectedSeason: state.ui.activeSeason,
  selectedTodo: state.selectedTodo,
});

export default connect(
  mapStateToProps,
  { clearSelectedSeason, selectSeason, updateTodoSeason },
)(SeasonsContainer);
