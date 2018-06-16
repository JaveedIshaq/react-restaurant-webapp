import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props){
        super(props);
    }
    
    renderDish(dish) {
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
 

    render() {

        if(this.props.dish != null)
        return(
             <div className="container">
               <div className="row">
                <div className="col-12 col-md-5 m-1">
                 {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                <h2>Comments</h2>
                     {this.props.dish.comments.map((review) => {
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
         else
            return(
              <div></div>
            );
    }
}


Dishdetail.propTypes = {
    dish: PropTypes.object,
};

export default Dishdetail;