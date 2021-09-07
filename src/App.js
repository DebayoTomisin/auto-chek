import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import SingleHouse from './pages/SingleHouse';

function App() {
  return (
    <>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route eaxct path="/house/:id" component={SingleHouse}/>
		</Switch>
    </>
  );
}

export default App;
