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
        const projectElements = this.state.projects.map((item, index) => {
            return <li key={item._id}>{item.projectName}</li>
        });

        return(
            <ul>
                {projectElements}
            </ul>
        )
    }
}

export default Projects;