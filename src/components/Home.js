import React, {Component} from 'react';
import NavBtn from './nav_btn';

class Home extends Component {

    render() {

        return(
            <div>
                <h1 className="text-center">Home Page</h1>
                <NavBtn to="/add-item" color="blue darken-2" text="Add Item" />
            </div>
        )
    }
}

export default Home;