import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

import { fetchAllTodos } from '../actions';
import MediaCardList from '../components/MediaCardList';
import SubNavContainer from './SubNavContainer';


class ToDo extends React.Component {
  componentDidMount() {
    this.props.fetchAllTodos(this.props.category);
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.props.fetchAllTodos(this.props.category);
    }
  }

  render() {
    return (
      <React.Fragment>
        <SubNavContainer />
        <Segment attached>
          <MediaCardList
            category={this.props.category}
            items={this.props.allTodos}
          />
        </Segment>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => ({
  allTodos: state.allTodos[state.ui.activeCategory],
  category: state.ui.activeCategory,
});

export default connect(
  mapStateToProps,
  { fetchAllTodos },
)(ToDo);
