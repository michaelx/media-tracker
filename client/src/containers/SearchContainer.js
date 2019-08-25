import React from 'react';
import { connect } from 'react-redux';
import { searchMedia } from '../actions';

import SearchBar from '../components/SearchBar';

class SearchContainer extends React.Component {
  onSearch = (term, category) => this.props.searchMedia(term, category);

  render() {
    return (
      <SearchBar onSearch={this.onSearch} category={this.props.activeCategory} />
    );
  }
}

const mapStateToProps = (state) => ({
  activeCategory: state.ui.activeCategory,
});

export default connect(mapStateToProps, { searchMedia })(SearchContainer);
