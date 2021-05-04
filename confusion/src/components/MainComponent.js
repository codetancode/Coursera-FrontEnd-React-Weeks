import { Component } from 'react';
import Menu from './MenuComponent.js';
import DishDetail  from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes.js';

class Main extends Component{

  constructor(props){
    super(props);
    this.state = {
      dishes:DISHES,
      selectedDish:null
    };
  }
  onDishSelect(dishId){
    this.setState({ selectedDish:dishId });
    //array.filter returns an array of all elements that's filter is true.
    
  }
  render() {
    return (
      <div>
        <Header />
        <Menu dishes={ this.state.dishes }  onClick={ (dishId) => this.onDishSelect(dishId) }/>
        <DishDetail dish={ this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] } />
        <Footer />
      </div>
    );
  }
}

export default Main;
