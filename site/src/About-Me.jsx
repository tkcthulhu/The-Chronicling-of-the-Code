import coffeeComputer from './img/background.jpeg'
import initials from './img/Initials.png'

export function AboutMe(props) {
    return(
        <div className="container about-me page-div">
            <div className="row about-me-row">
                <div className="col-6">
                    <img src={coffeeComputer} className='ratio ratio-1x1 about-me-pic' />
                </div>
                <div className="col-6 about-me-text">
                    <h4 className='about-me-title text-white'>The Chronicling of the Code</h4>
                    <br/>
                    <br/>
                    <p className='text-white'>As someone who has always had an interest in ripping things apart and seeing how they work, programming has always been something that intereseted me. When the opportunity for getting a start in this field via the Awesome Inc. Web Developer bootcamp was offered to me I knew that I had to take it, there my love for logic problems and puzzles finally met its match in the world of programming. We were challenged every week with a task that was just barely out of our reach, from Tic-Tac-Toe to To-Do Lists, from Weather Apps to D&D, and every week the amount that I learned was multiplied exponentially and my understanding of the craft grew fast and faster. Throughout the bootcamp I have touched a multitude of industry tools and become proficient in them, as well as refining my ability to learn and comprehend new material at a rapid rate. My time here has built my confidence in my abilities and I am ready to hit the ground running in this incredible profession.</p>
                    <div className="container-fluid">
                        <div className="row justify-content-end">
                            <div className="col-3">
                                <img src={initials} className='initials'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}