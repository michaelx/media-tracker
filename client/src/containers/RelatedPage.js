import React from 'react';
import { connect } from 'react-redux';
import { Pagination, Segment } from 'semantic-ui-react';

import { fetchRelatedMedia } from '../actions';
import MediaCardList from '../components/MediaCardList';


class Related extends React.Component {
  componentDidMount() {
    const { id, category } = this.props.match.params;

    this.props.fetchRelatedMedia(id, category);
  }

  handlePaginationChange = (e, { activePage }) => {
    const { id, category } = this.props.match.params;

    this.props.fetchRelatedMedia(id, category, activePage);
  };

  renderPagination() {
    const { page, total_pages: totalPages } = this.props.media;

    return (
      <Segment textAlign="center">
        <Pagination
          activePage={page}
          firstItem={null}
          lastItem={null}
          onPageChange={this.handlePaginationChange}
          totalPages={totalPages}
        />
      </Segment>
    );
  }

  render() {
    const { category } = this.props.match.params;
    const { results, total_pages: totalPages } = this.props.media;

    if (!results) {
      return (
        <div>Loading…</div>
      );
    }

    return (
      <Segment.Group>
        <Segment>
          <h3>People also like</h3>
        </Segment>
        <Segment>
          <MediaCardList
            category={category}
            items={results}
          />
        </Segment>
        {totalPages > 1 && this.renderPagination()}
      </Segment.Group>
    );
  }
}

const mapStateToProps = (state) => ({
  media: state.relatedMedia,
});

export default connect(
  mapStateToProps,
  { fetchRelatedMedia },
)(Related);
