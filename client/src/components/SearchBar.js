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
            fluid
            action="Search"
            placeholder="Search"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </Container>
    );
  }
}

export default SearchBar;
