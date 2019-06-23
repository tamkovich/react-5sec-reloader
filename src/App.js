import React from 'react';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.loadData();
    setInterval(this.loadData, 5000);
  }

  async loadData() {
    try {
      const res = await fetch('https://api.myjson.com/bins/seep5');
      const blocks = await res.json();
      console.log(blocks)
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (<div />);
  }

}

export default App;
