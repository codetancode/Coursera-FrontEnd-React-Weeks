import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent.js';
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
        <Navbar color="primary">
          <div className="container">
            <NavbarBrand href="/" className="text-white">Restorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={ this.state.dishes }/>
      </div>
    );
  }
}

export default App;
