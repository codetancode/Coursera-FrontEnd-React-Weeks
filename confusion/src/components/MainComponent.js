import { Component } from 'react';
import Home  from './HomeComponent.js';
import Menu from './MenuComponent.js';
import DishDetail  from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes.js';
import { Switch, Route, Redirect} from 'react-router-dom';

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
    const HomePage = () => {
      return(
        <Home />
      );

    }
    return (
      <div>
        <Header />
          <Switch>
            <Route path="/home" component={ HomePage } />
            <Route exact path="/menu" component={ () =>  <Menu dishes={this.state.dishes} /> }  />
            <Redirect to="/home" />
            
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
