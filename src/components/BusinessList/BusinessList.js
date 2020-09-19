import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component{
    render(){
        return(
            <div className="BusinessList">
                {
                    this.props.businessListProp.map(business => {
                        return <Business key={business.id} businessProp={business}/>;
                    })
                }
            </div>
        );
    }
}

export default BusinessList;