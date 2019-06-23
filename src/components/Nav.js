import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Nav extends Component {
  handleLanguage = (lang, index) => {
    // console.log(event.lang);
    // this.props.changeLanguage(event.lang);
    const { changeLanguage } = this.props;
    changeLanguage(lang.lang, index.index);
  };

  render() {
    const { nav, isActive } = this.props;

    return (
      <nav className="mb-3">
        <ul className="nav nav-pills">
          {nav.map((lang, index) => (
            <li className="nav-item" key={lang}>
              <button
                type="button"
                // className="nav-link btn-clear"
                className={(index === isActive) ? 'nav-link btn-clear active' : 'nav-link btn-clear'}
                // className={item.isActive ? 'nav-link btn-clear active' : 'nav-link btn-clear'}
                onClick={() => this.handleLanguage({ lang }, { index })}
              >
                {lang}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

Nav.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  nav: PropTypes.array.isRequired,
  isActive: PropTypes.number.isRequired,
};

export default Nav;
