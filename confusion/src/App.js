import './App.css';
import Main from './components/MainComponent.js';
import { DISHES } from './shared/dishes.js';
import { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      dishes:DISHES
    };
  }
 
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
