import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Header from './components/Header';
import Home from './pages/Home'
import SingleHouse from './pages/SingleHouse';

function App() {
  return (
    <>
    <Header />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route eaxct path="/house/:id" component={SingleHouse}/>
		</Switch>
    </>
  );
}

export default App;
