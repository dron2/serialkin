import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="wrapper">
        <Menu />
      </div>
    </Fragment>
  );
}

export default App;
