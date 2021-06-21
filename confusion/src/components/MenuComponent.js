import { Card, CardImg, CardTitle, CardImgOverlay, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderDishItem({dish, onClick}){

  return(
    <Card>
      <Link to={`menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>

    );
}    

const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
      return (
        <div key={ dish.id} className="col-12 col-md-5 m-1">
          <RenderDishItem dish={ dish } onClick={ props.onClick} />
        </div>
        );
      });

    if(props.dishes.isLoading){
      return(
        //id is loading then render loading component
        <div className='container'>
            <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(props.dishes.errMsg){
        return(
            <div className='container'>
                <h4>{props.dishes.errMsg}</h4>
            </div>
        );
    }
    else{
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
              <BreadcrumbItem active><Link to='/menu'>Menu</Link></BreadcrumbItem>
            </Breadcrumb>
            <div className='col-12'>
              <h2>Menu</h2>
              <hr/>
            </div>
          </div>
          <div className="row">
              {menu}
          </div>
        </div>
      );
    }
    

}
  
        
    


export default Menu;