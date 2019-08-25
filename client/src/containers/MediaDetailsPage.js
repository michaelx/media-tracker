import React from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Segment } from 'semantic-ui-react';

import {
  clearMediaDetails,
  clearSelectedTodo,
  fetchMediaDetails,
  fetchTodo,
  updateTodo,
} from '../actions';

import imgLoading from '../images/loading_paragraph.png';
import MediaHeader from '../components/MediaDetails/MediaHeader';
import SeasonsContainer from './SeasonsContainer';


class MediaDetails extends React.Component {
  componentDidMount() {
    const { id, category } = this.props.match.params;

    this.props.fetchTodo(id, category);
    this.props.fetchMediaDetails(id, category);
  }

  componentDidUpdate(prevProps) {
    // Update, when something gets added to the todo database for the first time,
    // so that its todo data gets fetched.
    if (this.props.allCategoryTodos !== prevProps.allCategoryTodos) {
      const { id, category } = this.props.match.params;

      this.props.fetchTodo(id, category);
    }
  }

  componentWillUnmount() {
    this.props.clearMediaDetails();
    this.props.clearSelectedTodo();
  }


  renderAdditionalContent() {
    /* eslint-disable camelcase */
    const { id, number_of_seasons, seasons } = this.props.mediaDetails;
    const { selectedTodo } = this.props;

    if (seasons && seasons.length > 0 && selectedTodo && selectedTodo.newestActiveSeason) {
      return (
        <Grid.Row>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={13}>
            <SeasonsContainer
              mediaId={id}
              newestActiveSeason={selectedTodo.newestActiveSeason}
              numberOfSeasons={number_of_seasons}
              todo={selectedTodo}
            />
          </Grid.Column>
        </Grid.Row>
      );
    }
    /* eslint-enable camelcase */

    return null;
  }


  handleUpdate = (data) => {
    const { id, category } = this.props.match.params;
    this.props.updateTodo(id, category, data);
  }


  render() {
    const { mediaDetails, selectedTodo } = this.props;

    if (!mediaDetails.id) {
      return (
        <Segment loading>
          <Image src={imgLoading} />
        </Segment>
      );
    }

    return (
      <Segment>
        <Grid>
          <MediaHeader
            mediaData={mediaDetails}
            todo={selectedTodo}
            category={this.props.match.params.category}
            handleUpdate={this.handleUpdate}
          />
          {this.renderAdditionalContent()}
        </Grid>
      </Segment>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  allCategoryTodos: state.selectedTodo[ownProps.match.params.category],
  mediaDetails: state.mediaDetails,
  selectedTodo: state.selectedTodo,
});

export default connect(
  mapStateToProps,
  {
    clearMediaDetails,
    clearSelectedTodo,
    fetchMediaDetails,
    fetchTodo,
    updateTodo,
  },
)(MediaDetails);
