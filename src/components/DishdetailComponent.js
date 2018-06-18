import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';


    function RenderDish(dish) { 
        {console.log(dish)}
        if(dish != null)
            return(
             <Card>
                 <CardImg top src={dish.image} alt={dish.name} />
                 <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText>{dish.description}</CardText>
                 </CardBody>
             </Card>
            );
         else
            return(
              <div></div>
            );
    }

    const Dishdetail = (props) => {   
        if(props.dish != null){
        return(
             <div className="container">
                            <Breadcrumb>
                  <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
               </Breadcrumb>
               <div className="row">

                <div className="col-12 col-md-5 m-1">
                 {RenderDish(props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                <h2>Comments</h2>
                     {props.comments.map((review) => {
                       return (
                        <ListGroup>
                           <ListGroupItem key={review.id}>
                              <p>{review.comment}</p>
                              <p> --- {review.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(review.date)))}</p>
                           </ListGroupItem>  
                        </ListGroup>
                        )  
                     })}
                </div>
               </div>
             </div>
            );
        }
         else {
            return(
                <div></div>
              );
         }

        }



Dishdetail.propTypes = {
    dish: PropTypes.object,
};

export default Dishdetail;