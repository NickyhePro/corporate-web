import * as React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import HomePage from './components/HomePage/HomePage';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
      <Header />
      <HomePage />
      </div>
    );
  }
}

export default App;
