import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class Repository extends Component {
  render() {
    const { repo } = this.props;
    const { rank } = this.props;
    const stars = repo.stargazers_count.toLocaleString('en');
    const forks = repo.forks_count.toLocaleString('en');
    const issues = repo.open_issues_count.toLocaleString('en');
    return (
      <li className="card mb-4">
        <div className="card-body">
          <p>
            #
            {rank + 1}
          </p>
          <div className="repo-avatar"><img src={repo.owner.avatar_url} alt={repo.name} /></div>
          <h2 className="repo-title"><a href={repo.html_url}>{repo.name}</a></h2>
          <p>{repo.description}</p>
          <ul className="repo-detail">
            <li>
              <span className="icon"><FontAwesomeIcon icon="star" /></span>
              {stars}
              <span className="pl-2">stars</span>
            </li>
            <li>
              <span className="icon"><FontAwesomeIcon icon="code-branch" /></span>
              {forks}
              <span className="pl-2">forks</span>
            </li>
            <li>
              <span className="icon"><FontAwesomeIcon icon="exclamation-triangle" /></span>
              {issues}
              <span className="pl-2">open issues</span>
            </li>
          </ul>
        </div>
      </li>
    );
  }
}

Repository.propTypes = {
  repo: PropTypes.object.isRequired,
  rank: PropTypes.number.isRequired,
};

export default Repository;
