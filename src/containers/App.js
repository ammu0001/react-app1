import React from 'react';
import MainContainer from './MainContainer'
import CreateCard from '../components/CreateCard'
import ToDoCard from '../components/ToDoCard'
import logo from '../logo.svg';
import '..//App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" /> 
      <ToDoCardContainer cards={this.props.cards}/>
      <CreateCard createNewCard={this.createNewCard}/> 
    </div>
  );
  
}

export default App;
