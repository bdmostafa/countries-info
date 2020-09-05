import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Country from './components/Country';
import NoMatch from './components/NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const [countries, setCountries] = useState();

  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home countries={countries} setCountries={setCountries}/>
          </Route>
          <Route path="/country/:countryName">
            <Country />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
