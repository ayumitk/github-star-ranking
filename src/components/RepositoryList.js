import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Repository from './Repository';

class RepositoryList extends Component {
  render() {
    const { error, isLoaded, items } = this.props;
    if (error) {
      return <div className="error-message">{error.message}</div>;
    }
    if (!isLoaded) {
      return <div className="loading-message">Loading...</div>;
    }
    return (
      <ul className="repo-list">
        {items.map((item, index) => (
          <Repository key={item.id} repo={item} rank={index} />
        ))}
      </ul>
    );
  }
}

RepositoryList.propTypes = {
  error: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
};

export default RepositoryList;
