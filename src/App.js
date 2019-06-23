import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Nav from './components/Nav';
import RepositoryList from './components/RepositoryList';

class App extends Component {
  state = {
    language: 'All',
    error: '',
    isLoaded: false,
    items: [],
    nav: ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'],
    isActive: 0,
  }

  componentWillMount() {
    this.fetchResponse();
  }

  fetchResponse = () => {
    const { language } = this.state;
    let filterLanguage = '';
    if (language !== 'All') {
      filterLanguage = `+language:${language}`;
    }
    const githubAPI = `https://api.github.com/search/repositories?q=stars:%3E1${filterLanguage}&s=stars&type=Repositories`;

    // console.log(githubAPI);

    fetch(githubAPI)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  changeLanguage = (lang, index) => {
    // console.log(lang + index);
    const language = lang;
    this.setState({
      language,
      isActive: index,
    }, () => {
      this.fetchResponse();
      this.setState({
        error: '',
        isLoaded: false,
      });
    });
  }

  render() {
    const {
      error, isLoaded, items, language, nav, isActive,
    } = this.state;
    return (
      <div className="container">
        <Nav
          language={language}
          nav={nav}
          isActive={isActive}
          changeLanguage={this.changeLanguage}
        />
        <RepositoryList
          error={error}
          isLoaded={isLoaded}
          items={items}
        />
      </div>
    );
  }
}

export default App;
