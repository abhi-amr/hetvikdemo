import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import IndexCorousel from './components/IndexCorousel';
import QNav from './components/QNavigation/Qpaper'

class App extends Component{
  render() {
    return (
      <div className="App">
        <Header />
        <IndexCorousel />
        <QNav />
      </div>
    );
  }
}

export default App;
