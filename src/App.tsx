import './App.css';

import { makeStyles } from '@material-ui/core';
import React from 'react';

import Sistema from './pages/sistemas';

const useStyles = makeStyles({
  app: {
    height: '100vh',
    width: '100%',
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Sistema></Sistema>
    </div>
  );
}

export default App;
