import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app';

const AppWrapper: React.FC = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
