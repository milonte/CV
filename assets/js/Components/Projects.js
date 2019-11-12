import React from 'react';
import ReactDOM from 'react-dom';
import Paginator from './Paginator';
import ProjectCard from './ProjectCard';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        const PROJECTS_PER_PAGE = 4;
        
        this.state = {
            projects: [],
            currentProjects: [],
            currentPage: 1,
            numberOfPages: 0,
            projectsPerPage: PROJECTS_PER_PAGE,
        }

        

        this.handlePaginateNumbClick = this.handlePaginateNumbClick.bind(this);
        this.handleProjects = this.handleProjects.bind(this);
    }

    componentDidMount() {
        fetch('/data/projects')
        .then(response => response.json())
        .then(projects => {
            this.setState({
                projects: projects,
                numberOfPages: (projects.length / this.state.projectsPerPage),
            });
        })
        .then( () => {
            this.handleProjects();
        })
    }

    componentWillUnmount() {

    }

    handlePaginateNumbClick(event) {

        let page = event.target.attributes.value.value;
        let currentPage = this.state.currentPage;
        let targetPage = currentPage;
        

        if(Number(page) > 0 && Number(page) <= this.state.numberOfPages) {
            targetPage = Number(page);
        } else if (page == 'prev' && currentPage > 1) {
            targetPage = currentPage - 1; 
        }
        else if (page == 'next' && currentPage < this.state.numberOfPages) {
            targetPage = currentPage + 1; 
        }
        
        this.setState({
            currentPage: targetPage
            },
            () => { this.handleProjects() }
        );
    }

    handleProjects() {
        let offset = (this.state.currentPage - 1) * this.state.projectsPerPage;
        let currentProjects = [];
        for (let i = offset; i < offset + this.state.projectsPerPage; i++) {
            currentProjects.push(this.state.projects[i]);
        }

        this.setState({
            currentProjects: currentProjects,
        })
    }
    
    renderProjects(projects) {
        return (
            projects.map(project =>
                <ProjectCard key={project.id} project={project} />
            )
        )
    }

    render() {
        return (
            <div>
                PROJECTS
                {this.renderProjects(this.state.currentProjects)}
                 <Paginator numbOfPages={this.state.numberOfPages} currentPage={this.state.currentPage} callback={this.handlePaginateNumbClick} />
            </div>
        )
    }
}

export default Projects;