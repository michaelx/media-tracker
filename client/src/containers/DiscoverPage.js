import React from 'react';
import { connect } from 'react-redux';
import { Divider, Segment } from 'semantic-ui-react';

import { clearSearchResult, fetchTrending } from '../actions';
import MediaCardList from '../components/MediaCardList';
import SearchContainer from './SearchContainer';
import SubNavContainer from './SubNavContainer';


class Discover extends React.Component {
  componentDidMount() {
    if (this.props.trendingMedia.category !== this.props.activeCategory) {
      this.props.fetchTrending(this.props.activeCategory);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeCategory !== prevProps.activeCategory) {
      this.props.fetchTrending(this.props.activeCategory);

      if (this.props.searchResult.results.length > 0) {
        this.props.clearSearchResult();
      }
    }
  }

  componentWillUnmount() {
    if (this.props.searchResult.results.length > 0) {
      this.props.clearSearchResult();
    }
  }

  render() {
    const { searchResult, trendingMedia } = this.props;

    return (
      <React.Fragment>
        <SubNavContainer />
        <Segment attached>
          <h3>Search for something new</h3>
          <SearchContainer />
          <Divider hidden />
          <MediaCardList
            category={searchResult.category}
            items={searchResult.results}
          />

          <Divider horizontal section>Or</Divider>

          <h3>Check out what’s trending</h3>
          <MediaCardList
            category={trendingMedia.category}
            items={trendingMedia.results}
          />
        </Segment>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCategory: state.ui.activeCategory,
  searchResult: state.searchResult,
  trendingMedia: state.trendingMedia,
});

export default connect(
  mapStateToProps,
  { clearSearchResult, fetchTrending },
)(Discover);
