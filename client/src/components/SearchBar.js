import React from 'react';
import { Container, Input } from 'semantic-ui-react';

class SearchBar extends React.Component {
  state = { term: '' };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.term, this.props.category);
  }

  render() {
    return (
      <Container>
        <form
          onSubmit={this.onSubmit}
        >
          <Input
            action="Search"
            fluid
            onChange={(e) => this.setState({ term: e.target.value })}
            placeholder="Search"
            value={this.state.term}
          />
        </form>
      </Container>
    );
  }
}

export default SearchBar;
