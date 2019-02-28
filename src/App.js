import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import { NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to="/home" >
            Inicio
          </NavLink>
          {" | "}
          <NavLink to="/signup" >
            Registrate
          </NavLink>
          {" | "}
          <NavLink to="/login" >
            Inicia sesión
          </NavLink>
        </nav>
        <Routes />
      </div>
    );
  }
}

export default App;
