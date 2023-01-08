
const Project = ({title, image, link, gitLink}) => {
    return (
        <div className="project">
            <h3 className="projectTitle">{title}</h3> 
            <img className="projectImage" src={process.env.PUBLIC_URL + image} alt={title}></img> <br />
            <a className="projectLink" href={link}>{link}</a> <br />
            <a className="gitLink" href={gitLink}>{gitLink}</a>
        </div>
    )
}

export default Project;