//imports
import Project from '../components/Project';
import projectData from '../assets/projectData.json';

const Portfolio = () => {
    const showProjects = () => projectData.map(project => <Project {...project} />)
    return (
        <div className="portfolio">
            <h2>Portfolio</h2>
            <div className='projects'>
                {showProjects()}
            </div>
        </div>
    )
}

export default Portfolio;