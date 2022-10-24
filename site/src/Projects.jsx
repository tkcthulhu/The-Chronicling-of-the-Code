export function ProjectsPage(props) {

    const projects = [
        {
            name: 'My First Website',
            iframe: <iframe src="https://tkcthulhu.github.io/CSS-HTML-Project/" frameborder="1" height="600" width="900" className="project"/>,
            description: 'My very first website, this was actually supposed to be an MDN tutorial page but I misunderstood the project like a champion and built this thing from scratch. I don\'t think I\'m going to update these first few projects, to me it\'s always going to be important to remember where I started.',
            dateCompleted: ''
        },
        {
            name: 'The Mind Reader',
            iframe:  <iframe src="https://tkcthulhu.github.io/mindreader/" frameborder="0" height="844" width="390" className="project"/>,
            description: '',
            dateCompleted: '',
        },
        {
            name: 'Thicc Tac Toe',
            iframe: <iframe src="https://tkcthulhu.github.io/thicc-tac-toe/" frameborder="1" height="1200" width="800" className="project"/>,
            description: '',
            dateCompleted: '',
        },
    ]

    let projElements = []

    function projCreator(projects) {
        for (let i = 0; i < projects.length; i++) {
            projElements.push(
                <div className="row">
                    <div className="col-6 d-flex justify-content-center">
                        {projects[i].iframe}
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <h3>{projects[i].name}</h3><br/>
                        <p>{projects[i].description}</p>
                    </div>
                </div>
            )
        }
        return projElements
    } 
    return(
        <>
            {projCreator(projects)}
            {projElements}
        </>
    )
}