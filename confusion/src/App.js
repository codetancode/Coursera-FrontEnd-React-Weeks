import './App.css';
import {BrowserRouter} from 'react-router-dom';
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
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
