import React, { Component } from 'react';
import Menu from './components/MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Main  from './components/MainComponent';

import { DISHES } from './shared/dishes';

class App extends Component {
  render() {
    return ( 
      <div className="App">
              <Main />
      </div>
    );
  }
}

export default App;