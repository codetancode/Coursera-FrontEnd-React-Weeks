import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
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
        <Navbar color="warning">
          <div className="container">
            <NavbarBrand href="/">Pagal Panti</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={ this.state.dishes }/>
      </div>
    );
  }
}

export default App;
