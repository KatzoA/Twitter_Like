import React from 'react';
import ReactDOM from 'react-dom';
//COMPONENT
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';
//CSS
import './css/normalize.css';
import './css/style.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
