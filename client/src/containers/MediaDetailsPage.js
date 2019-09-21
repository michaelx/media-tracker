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

  componentWillUnmount() {
    this.props.clearMediaDetails();
    this.props.clearSelectedTodo();
  }


  renderAdditionalContent() {
    const {
      id,
      number_of_seasons: numberOfSeasons,
      seasons,
    } = this.props.mediaDetails;

    const { selectedTodo } = this.props;

    if (seasons && seasons.length > 0 && selectedTodo && selectedTodo.newestActiveSeason) {
      return (
        <Grid.Row>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={13}>
            <SeasonsContainer
              mediaId={id}
              newestActiveSeason={selectedTodo.newestActiveSeason}
              numberOfSeasons={numberOfSeasons}
              todo={selectedTodo}
            />
          </Grid.Column>
        </Grid.Row>
      );
    }

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
            category={this.props.match.params.category}
            handleUpdate={this.handleUpdate}
            mediaData={mediaDetails}
            todo={selectedTodo}
          />
          {this.renderAdditionalContent()}
        </Grid>
      </Segment>
    );
  }
}


const mapStateToProps = (state) => ({
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
