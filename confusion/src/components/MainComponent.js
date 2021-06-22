import { Component } from 'react';
import Home  from './HomeComponent.js';
import Menu from './MenuComponent.js';
import About from './AboutComponent';
import DishDetail  from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';//entire dedicated component so no {}
import Contact  from './ContactComponent';//components/component class from component.js so no {}
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
//with route is required to conect to store
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments, fetchPromos} from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

/* Map state to props function..connection goes with new props at the export of the Main component */
/* update state to props as new state is given as props from store */
const mapStateToPorps = state =>{
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
};

const mapDispatchToPorps = (dispatch) =>({
  //dispatching a action creator obj via func ''addComment'', 
  //dispatch will return addcomment attribute/property
  //as ''mapDispatchToPorps'' is connected to mail app (below)
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  //adding a dispatch attrubute, then in contact component
  resetFeedbackForm: () =>{ dispatch(actions.reset('feedback')) },
  //similar to fetching of dishes fetching comments and promotions
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
});

class Main extends Component{

  constructor(props){
    super(props);
  
  }


  //life-cycle method
  //when Main component is being mounted in app, call fetchdishes, all other fetches
  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();

  }

  onDishSelect(dishId){
    this.setState({ selectedDish:dishId });
    //array.filter returns an array of all elements that's filter is true.
    
  }
  render() {
    console.log(this.props)
    const HomePage = () => {
      return(
        <Home dish={this.props.dishes.dishes.filter( (dish) => dish.featured )[0] }
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMsg={this.props.dishes.errmsg}
        promotion={this.props.promotions.promotions.filter( (promo) => promo.featured )[0] }
        promosLoading={this.props.promotions.isLoading}
        promosErrMsg={this.props.promotions.errmsg}
        
        leader={this.props.leaders.filter( (lead) => lead.featured )[0] } />
      );

    }

    const DishWithID = ({match}) =>{
      return(
        <DishDetail dish={ this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10) )[0] }
        isLoading={this.props.dishes.isLoading}
        errMsg={this.props.dishes.errmsg}
        comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)) }
        commentsErrMsg={this.props.comments.errmsg}
        addComment = { this.props.addComment }
        />
      ); 
    }
    return (
      <div>
        <Header />
          <Switch>
            <Route path="/home" component={ HomePage } />
            <Route exact path="/menu" component={ () =>  <Menu dishes={this.props.dishes} /> }  />
            <Route exact path="/menu/:dishId" component={DishWithID}/>   
            <Route exact path="/menu/:dishId" component={DishWithID}/>            
            <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />}/>
            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />}/>

            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

/* Map state to props function..connectiong goes with new props at the export of the Main component */
/* as we are using react router, we have to modefy the router as we are connection component to store using withRoute */
export default withRouter( connect(mapStateToPorps, mapDispatchToPorps)(Main) );
