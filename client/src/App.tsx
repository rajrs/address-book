import React from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contacts from './components/Contacts';
import Groups from './components/Groups';
import Home from './components/Home';
import MenuBar from './components/MenuBar';
import {routePath} from './helper/constants'

function App() {
  return (
    <Router>
    <div className="App">
       <MenuBar/>
       <Container>
       <Switch>
          <Route exact path={routePath.LANDING} component={Home}/>
          <Route path={routePath.GROUPS} component={Groups}/>
          <Route path={routePath.CONTACTS} component={Contacts}/>          
        </Switch>
       </Container>
    </div>
    </Router>
   
  );
}

export default App;
