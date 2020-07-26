import React, { Component } from 'react';
import Header from './Header'
import Card from './Card'
import './App.css';

class App extends Component{

  render(){
    console.log(this.props.data)
  return (
    <div className="App">
      
      <Header />
      
      <Card />

      {/* <Footer /> */}

    </div>
  );
 }
}
export default App;
