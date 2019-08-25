import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../actions';

import SubNav from '../components/SubNav';

class SubNavContainer extends React.Component {
  onCategoryClick = (item) => this.props.selectCategory(item);

  render() {
    return (
      <SubNav
        activeItem={this.props.activeCategory}
        onCategoryClick={this.onCategoryClick}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  activeCategory: state.ui.activeCategory,
});

export default connect(
  mapStateToProps,
  { selectCategory },
)(SubNavContainer);
