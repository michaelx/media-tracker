import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

import { fetchAllDone } from '../actions';
import MediaCardList from '../components/MediaCardList';
import SubNavContainer from './SubNavContainer';

class Done extends React.Component {
  componentDidMount() {
    this.props.fetchAllDone(this.props.category);
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.props.fetchAllDone(this.props.category);
    }
  }

  render() {
    return (
      <React.Fragment>
        <SubNavContainer />
        <Segment attached>
          <MediaCardList
            category={this.props.category}
            items={this.props.doneTodos}
          />
        </Segment>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.ui.activeCategory,
  doneTodos: state.doneTodos[state.ui.activeCategory],
});

export default connect(mapStateToProps, { fetchAllDone })(Done);
