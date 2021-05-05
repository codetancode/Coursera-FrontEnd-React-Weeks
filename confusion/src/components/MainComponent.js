import { Component } from 'react';
import Home  from './HomeComponent.js';
import Menu from './MenuComponent.js';
import DishDetail  from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact  from './ContactComponent';
import { DISHES } from '../shared/dishes.js';
import { Switch, Route, Redirect} from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component{

  constructor(props){
    super(props);
    this.state = {
      dishes:DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
    };
  }
  onDishSelect(dishId){
    this.setState({ selectedDish:dishId });
    //array.filter returns an array of all elements that's filter is true.
    
  }
  render() {
    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter( (dish) => dish.featured )[0] }
        promotion={this.state.promotions.filter( (promo) => promo.featured )[0] }
        leader={this.state.leaders.filter( (lead) => lead.featured )[0] } />
      );

    }
    return (
      <div>
        <Header />
          <Switch>
            <Route path="/home" component={ HomePage } />
            <Route exact path="/menu" component={ () =>  <Menu dishes={this.state.dishes} /> }  />
            <Route exact path="/contactus" component={Contact}/>

            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
