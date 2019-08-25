import React from 'react';
import { connect } from 'react-redux';
import { selectNavItem } from '../actions';

import Nav from '../components/Nav';

class NavContainer extends React.Component {
  onNavClick = (item) => this.props.selectNavItem(item);

  render() {
    return (
      <Nav onNavClick={this.onNavClick} activeItem={this.props.activeNavItem} />
    );
  }
}

const mapStateToProps = (state) => ({
  activeNavItem: state.ui.activeNavItem,
});

export default connect(mapStateToProps, { selectNavItem })(NavContainer);
