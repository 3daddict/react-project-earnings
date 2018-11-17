import React from 'react';
import {Link} from 'react-router-dom';

export default props => {
    return (
        <div className="row">
            <div className="push-right">
                <Link to={props.to || '/'} className={`btn ${props.color}`}>{props.text}</Link>
            </div>
        </div>
    )
}