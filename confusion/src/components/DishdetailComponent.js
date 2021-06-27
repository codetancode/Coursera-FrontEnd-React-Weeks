import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, 
        Modal, ModalHeader, ModalBody, Button, Row, Col, Label } from "reactstrap";
import { Link } from 'react-router-dom';
import { Component } from "react";
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderDish({ dish }){
            return(
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={ baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
              </div>
            );
    }
    
function RenderComments({comments, postComment, dishId}){
        if(comments != null)
            return(
                <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    { comments.map((com) =>{
                        {console.log(com);}
                        return(
                            <li key={ com.id }>
                            <p>{ com.comment } </p>  
                            <p>--{ com.author }, { com.date }</p>
                            </li>
                        );
                        
                    }) }
                </ul>
                <CommentForm postComment={postComment} dishId={dishId} />
                </div>
            );
        
                
        }


const DishDetail = (props) => {
    if(props.isLoading){
        return(
            //id is loading then render loading component
            <div className='container'>
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(props.errMsg){
        return(
            <div className='container'>
                <h4>{props.errMsg}</h4>
            </div>
        );
    }
    else if(props.dish != null){
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
                    <RenderDish dish={ props.dish }/>
                    <RenderComments comments={ props.comments }
                    postComment={ props.postComment }
                    dishId={ props.dish.id }
                    
                    />
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

class CommentForm extends Component{
    constructor(props){
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values){
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render(){
        return(
            <div>
                <Button outline onClick={ this.toggleModal}><span>Some icon</span> </Button>
                <Modal isOpen={this.state.isModalOpen} >
                <ModalHeader toggle={this.toggleModal} >Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className='form-group'>
                            <Col>
                            <Label htmlFor='rating'>Rating</Label>
                            <Control.select model='.rating' id='rating' className='form-control'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col>
                            <Label htmlFor='author'>Your Name</Label>
                            <Control.text model='.author' id='author'
                                placeholder='Your Name' className='form-control'
                                validators={{
                                    minLength: minLength(3),
                                    maxLength: maxLength(15)  
                                }}
                            />
                            <Errors
                                className='text-danger'
                                model='.author'
                                show='touched'
                                messages={{
                                    minLength: 'Must be greater than 3 char',
                                    maxLength: 'Must be less than 15 char'
                                }}
                            />
                           </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col>
                            <Label htmlFor='comment'>Comment</Label>
                            <Control.textarea model='.comment' id='comment' rows='6' className='form-control' / >
                            
                            </Col>
                        </Row>
                        <Button type='submit' className="bg-primary">
                            Submit
                        </Button>
                    </LocalForm>
                </ModalBody>
                </Modal>
            
            </div>
        );
    }


}
    

    

export default DishDetail;