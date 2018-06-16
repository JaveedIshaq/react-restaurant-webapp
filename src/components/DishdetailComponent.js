import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props){
        super(props);
    }
    
    

    render() {

        if(this.props.dish != null)
        return(
             <div className="row">
                <div className="col-12 col-md-5 m-1">
             <Card>
                 <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                 <CardBody>
                     <CardTitle>{this.props.dish.name}</CardTitle>
                     <CardText>{this.props.dish.description}</CardText>
                 </CardBody>
             </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                <h2>Comments</h2>
                     {this.props.dish.comments.map((review) => {
                       return (
                        <div key={review.id}>
                            <p>{review.comment}</p>
                            <p> --- {review.author}, {review.date}</p>
                        </div>  
                        )  
                     })}
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