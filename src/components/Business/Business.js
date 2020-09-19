import React from 'react';
import './Business.css';

class Business extends React.Component{
    render(){
        return(
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.businessProp.imageSrc} alt=''/>
                </div>
                <h2>{this.props.businessProp.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{this.props.businessProp.address}</p>
                        <p>{this.props.businessProp.city}</p>
                        <p>{this.props.businessProp.state} {this.props.businessProp.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.businessProp.category}</h3>
                        <h3 className="rating">{this.props.businessProp.rating} stars</h3>
                        <p>{this.props.businessProp.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Business;