import React, { Component } from 'react';
import './App.css';
import ComplaintForm from './components/complaint-form';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>Report a problem with your delivery</header>
       <ComplaintForm />
      </div>
    );
  }
}

export default App;
