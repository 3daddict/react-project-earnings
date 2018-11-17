import React, {Component} from 'react';
import ProjectList from '../dummyData/project';

class Projects extends Component {
    state = {
        projects: []
    }

    componentDidMount(){
        this.getProjectList();
    }

    getProjectList(){
        //call to the server to get data
        this.setState({
            projects: ProjectList
        });
    }

    render() {
        console.log('State: ', this.state);
        return(
            <div>
                <h1 className="text-center">Projects Page</h1>

            </div>
        )
    }
}

export default Projects;