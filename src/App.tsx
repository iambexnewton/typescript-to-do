import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import ListScreen from './screens/ListScreen';

function App() {
  return (
<BrowserRouter>
<Switch>
<Route exact path="/"><ListScreen /> </Route>
<Route path="/focus"><div> Focus</div> </Route>
</Switch>
</BrowserRouter>
  );
}

export default App;
