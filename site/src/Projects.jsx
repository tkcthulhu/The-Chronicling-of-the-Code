export function ProjectsPage(props) {

    const projects = [
        {
            name: 'TOLA',
            iframe:  <iframe title='The Mind Reader' src="https://tola-c43c5.web.app/" frameborder="0" height="844" width="390" className="project proj-preview"/>,
            dateCompleted: 'Most recent iteration 12/14/2022 *Still in progress*',
            description: 'Tola which is the norse word meaning \"to endure"\
            The inspiration for this project is my personal workout routine, as someone who works with a coach that uses a strength based training model, it either requires you to write all of your workouts in a notebook ahead of time or remember a bunch of numbers and percentages and do math while you’re hot and sweaty and trying to lift weights which is not fantastic. Having shared this frustration with other athletes I knew exactly what I wanted to build. Tola is a tool to keep track of your maxes, keep track of your programming, what exercises still need to be done, the weight that needs to be lifted, how many reps to do and it displays it in a format that is easy to read and interact with. Over the course of this project I have learned how to create a complex database, tie all the information together, and pull all of it into a well structured and intuitive user experience. With future iterations I plan to fully implement coach users, add a social aspect to gyms and add team functionalities.',
            link: 'Front End: https://github.com/tkcthulhu/tola Back End: https://github.com/tkcthulhu/tola-api'
        },
        {
            name: 'Listy Business',
            iframe:  <iframe title='Listy Business' src="https://tkcthulhu.github.io/listy-business/" frameborder="0" height="844" width="390" className="project proj-preview"/>,
            dateCompleted: '10/21/2022',
            description: 'So this was our next step in learning about state and using React to pass props and information to components, I created a multi list function with filtering and honestly it was probably the hardest that I had pushed myself to date in the bootcamp. However the payoff was fantastic, the project was definetly not the prettiest that I have built, but the functionality was something I was very proud of.',
            link: 'https://github.com/tkcthulhu/listy-business'
        },
        {
            name: 'Thicc Tac Toe',
            iframe: <iframe title='Thicc Tac toe' src="https://tkcthulhu.github.io/thicc-tac-toe/" frameborder="1" height="600" width="800" className="project proj-preview"/>,
            dateCompleted: '10/07/2022',
            description: `The first truly heavy logic lift in our class, this was a challenge that I found incredibly satisfying every obsticle that I was able to overcome. I started this project out by trying first to make it possible to play the game completely in the console with no visual aids, which I did by creating the game board as an array, and creating a function that would loop through and log the indexes for "X" and "O", after that it would run through several possibilities for the win conditions availible on the board. After that I tackled the front end and making it look like a game that I would actually enjoy playing, I used screen record with Notability on my ipad to create the drawing effect of the different marks on the board, I thought it added a nice casual style touch to the game. Lastly I decided to take my first attempt at an AI, which, while tic-tac-toe is to us a simple game, this drove the point home to me of how methodical you must be when explaining a task to a computer, how to tell it what to look for, and in what EXACT order it needs to look for those things. While this is still a very simple AI, with only 7 weeks of programming under my belt at the time I was and still am very proud of it. **SIDE NOTE (If you want to play the AI you have to click the AI button in the bottom right hand corner to trigger an AI move)`,
            link: 'https://github.com/tkcthulhu/thicc-tac-toe',
        },
        {
            name: '5CAST',
            iframe:  <iframe title='5CAST' src="https://tkcthulhu.github.io/5CAST/" frameborder="0" height="844" width="390" className="project proj-preview"/>,
            dateCompleted: '10/01/2022',
            description: 'Pushing the envelop of state in this one, also the first time working with Geolacation for the first time so getting that to work was pretty cool. This also has my first attempt at error handling which was a little ham fisted but hey, it\'s all about the process and learning. I can\'t wait to see what else we create over the course of this bootcamp!',
            link: 'https://github.com/tkcthulhu/5CAST'
        },
        {
            name: 'The Mind Reader',
            iframe:  <iframe title='The Mind Reader' src="https://tkcthulhu.github.io/mindreader/" frameborder="0" height="844" width="390" className="project proj-preview"/>,
            dateCompleted: '09/23/2022',
            description: 'Our first introduction to state in the bootcamp, this was definetly a turning point where the concept of programming finally clicked for me. It was understanding the concept that as a programmer the language is a tool in itself but that the big "AHA" moment is you can literally create your own tools in whatever way you see fit. If something is frustrating or repetitive, make it a function, then find another similar task a repeat, this way you can constantly refine your programs and recycle functions you\'ve created into other projects. Programming truly gives you the ability to make your work as hard or as easy as you want, annoying tasks can be made into functions or automated, your IDE can be set up any way you want, you can work from anywhere with a decent internet connection, it puts the world at your fingertips',
            link: 'https://github.com/tkcthulhu/mindreader',
        },
        {
            name: 'My First Website',
            iframe: <iframe title='My First Website' src="https://tkcthulhu.github.io/CSS-HTML-Project/" frameborder="1" height="600" width="900" className="project proj-preview"/>,
            dateCompleted: '09/02/2022',
            description: 'My very first website, this was actually supposed to be an MDN tutorial page but I misunderstood the project like a champion and built this thing from scratch. Many hours were spent here trying to figure out how to create buttons that actually do things, as well as tying those buttons to things to actually do. In retrospect I would definetly add programming to this list of thing, but it\'s not a hobby, it\'s a career now so I guess it doesn\'t quite meet the criteria. Though this is something that isn\'t pretty, and there was a lot of growing pains in this project, and if I were to redo it now I know it would be 10x better, I don\'t think I\'m going to update this or these other first few projects, to me it\'s always going to be important to remember where I started.',
            link: 'https://github.com/tkcthulhu/CSS-HTML-Project',
        },
        
    ]

    let projElements = []

    function projCreator(projects) {
        for (let i = 0; i < projects.length; i++) {
            projElements.push(
                <div className="row proj-row">
                    <div className="col-6 d-flex justify-content-center">
                        {projects[i].iframe}
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <div className="container">
                            <div className="row-12">
                                <h3 className="text-white proj-title">{projects[i].name}</h3>
                            </div>
                            <div className="row-12">
                                <h4 className="text-white proj-date">{projects[i].dateCompleted}</h4>
                            </div>
                            <div className="row-12">
                                <p className="text-white proj-desc">{projects[i].description}</p>
                            </div>
                            <div className="row-12">
                            <a class="btn btn-light" href={projects[i].link} role="button">Click here to see the repo!</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return projElements
    } 
    return(
        <>
            <div className="container-fluid page-div">
                {projCreator(projects)}
            </div>
        </>
    )
}