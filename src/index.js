import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faStar, faCodeBranch, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import * as serviceWorker from './serviceWorker';
import App from './App';

library.add(fab, faStar, faCodeBranch, faExclamationTriangle);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
