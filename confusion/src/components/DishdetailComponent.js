import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
    
    function RenderDish({ dish }){
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
    
    function RenderComments({comments}){
     
            return(comments.map((com) => {
                return (
                      <li key={ com.id }>
                        <p>{ com.comment } </p>  
                        <p>--{ com.author }, { new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', date: '2-digit'}).format(new Date(Date.parse(com.date))) }</p>
                      </li>
                );
            }));
            
    
        }
       
    

    const DishDetail = (props) => {
        if(props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                     <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h2>{props.dish.name}</h2>
                        <hr/>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={ props.dish }/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <ul className="list-unstyled">
                                <RenderComments comments={ props.comments } />
                            </ul>
                        </div>
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

export default DishDetail;