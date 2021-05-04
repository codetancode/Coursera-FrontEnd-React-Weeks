import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail  extends Component{
    constructor(props){
        super(props);
    }

    renderDish(dish){
            return(
                <Card key={dish.id}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
            );
    }
    
    renderComments(comments){
        console.log(comments);
            return(comments.map((com) => {
                return (
                      <li key={ com.id }>
                        <p>{ com.comment } </p>  
                        <p>--{ com.author }, { com.date }</p>
                      </li>
                );
            }));
            
    
        }
       
    

    render(){
        if(this.props.dish != null){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        { this.renderDish(this.props.dish) }
                    </div>
                   <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            { this.renderComments(this.props.dish.comments) }
                        </ul>
                   </div>
                </div>
                );
        }
        else{
            return(
                <div>
                </div>
            );
            }
    }
} 

export default DishDetail;