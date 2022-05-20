import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavBar />
        <h2>App Component</h2>
      </div>
    );
  }
}

export default App;