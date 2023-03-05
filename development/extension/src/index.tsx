import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages/Home';
import './styles/main.scss';

const App = () => {
  return <Home />;
};

ReactDOM.render(<App />, document.getElementById('root'));
