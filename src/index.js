import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <div className='container'>
        <Counter author='Daniel Osvaldo Truyol'>Contador</Counter>
    </div>
  );
};

render(<App />, document.getElementById('root'));