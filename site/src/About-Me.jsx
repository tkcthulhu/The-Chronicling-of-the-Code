import coffeeComputer from './img/background.jpeg'
import initials from './img/Initials.png'
import JS from './icons/JS.png'
import React from './icons/React.png'
import Python from './icons/Python.png'
import Django from './icons/Django.png'
import PostGreSQL from './icons/PostGreSQL.png'
import Git from './icons/Git.png'
import HTML from './icons/HTML.png'
import CSS from './icons/CSS.png'
import SCSS from './icons/SCSS.png'
import Bootstrap from './icons/Bootstrap.png'
import PS from './icons/PS.png'
import Github from './icons/Github.png'
import Slack from './icons/Slack.png'
import VSCode from './icons/VSCode.png'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export function AboutMe(props) {
    return(
        <div className="container about-me page-div">
            <div className="row about-me-row">
                <div className="col-6">
                    <img src={coffeeComputer} alt='coffee and coding' className='ratio ratio-1x1 about-me-pic' />
                </div>
                <div className="col-6 about-me-text">
                    <h4 className='about-me-title text-white'>The Chronicling of the Code</h4>
                    <br/>
                    <br/>
                    <p className='text-white'>As someone who has always had an interest in ripping things apart and seeing how they work, programming has always been something that intereseted me. When the opportunity for getting a start in this field via the Awesome Inc. Web Developer bootcamp was offered to me I knew that I had to take it, there my love for logic problems and puzzles finally met its match in the world of programming. We were challenged every week with a task that was just barely out of our reach, from Tic-Tac-Toe to To-Do Lists, from Weather Apps to D&D, and every week the amount that I learned was multiplied exponentially and my understanding of the craft grew fast and faster. Throughout the bootcamp I have touched a multitude of industry tools and become proficient in them, as well as refining my ability to learn and comprehend new material at a rapid rate. My time here has built my confidence in my abilities and I am ready to hit the ground running in this incredible profession.</p>
                    <div className="container-fluid">
                        <div className="row justify-content-end">
                            <div className="col-3">
                                <img src={initials} alt='TC' className='initials'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my justify-content-center">
                <div className="col-2">
                    <h4 className="text-white underline">My Tech Stack</h4>
                </div>
            </div>
            <div className="row">
                <div className="col tech-stack">
                    <div className="row justify-content-center tech-stack-title">
                        <div className="col-10">
                            <h5 className="text-white">Software/Web Development</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <OverlayTrigger
                              placement='bottom'
                              key='bottom'
                              overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                  <strong>JavaScript</strong>
                                </Tooltip>
                              }
                            >
                                <img className='tech-icon' src={JS} alt="Github" />
                            </ OverlayTrigger>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <OverlayTrigger
                              placement='bottom'
                              key='bottom'
                              overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                  <strong>React</strong>
                                </Tooltip>
                              }
                            >
                                <img className='tech-icon' src={React} alt="Github" />
                            </ OverlayTrigger>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <OverlayTrigger
                              placement='bottom'
                              key='bottom'
                              overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                  <strong>Python</strong>
                                </Tooltip>
                              }
                            >
                                <img className='tech-icon' src={Python} alt="Github" />
                            </ OverlayTrigger>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4 col-sm-6">
                            <OverlayTrigger
                              placement='bottom'
                              key='bottom'
                              overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                  <strong>Django</strong>
                                </Tooltip>
                              }
                            >
                                <img className='tech-icon' src={Django} alt="Github" />
                            </ OverlayTrigger>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <OverlayTrigger
                              placement='bottom'
                              key='bottom'
                              overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                  <strong>PostGreSQL</strong>
                                </Tooltip>
                              }
                            >
                                <img className='tech-icon' src={PostGreSQL} alt="Github" />
                            </ OverlayTrigger>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <OverlayTrigger
                              placement='bottom'
                              key='bottom'
                              overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                  <strong>Git</strong>
                                </Tooltip>
                              }
                            >
                                <img className='tech-icon' src={Git} alt="Github" />
                            </ OverlayTrigger>
                        </div>
                    </div>
                </div>
                <div className="col tech-stack">
                    <div className="row justify-content-center tech-stack-title">
                        <div className="col-5">
                            <h5 className="text-white">UX/UI Design</h5>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6">
                            <OverlayTrigger
                              placement='bottom'
                              key='bottom'
                              overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                  <strong>HTML</strong>
                                </Tooltip>
                              }
                            >
                                <img className='tech-icon' src={HTML} alt="Github" />
                            </ OverlayTrigger>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <OverlayTrigger
                              placement='bottom'
                              key='bottom'
                              overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                  <strong>CSS</strong>
                                </Tooltip>
                              }
                            >
                                <img className='tech-icon' src={CSS} alt="Github" />
                            </ OverlayTrigger>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <OverlayTrigger
                              placement='bottom'
                              key='bottom'
                              overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                  <strong>Bootstrap</strong>
                                </Tooltip>
                              }
                            >
                                <img className='tech-icon' src={Bootstrap} alt="Github" />
                            </ OverlayTrigger>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6">
                            <OverlayTrigger
                              placement='bottom'
                              key='bottom'
                              overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                  <strong>SCSS</strong>
                                </Tooltip>
                              }
                            >
                                <img className='tech-icon' src={SCSS} alt="Github" />
                            </ OverlayTrigger>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <OverlayTrigger
                              placement='bottom'
                              key='bottom'
                              overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                  <strong>PhotoShop</strong>
                                </Tooltip>
                              }
                            >
                                <img className='tech-icon' src={PS} alt="Github" />
                            </ OverlayTrigger>
                        </div>
                    </div>
                </div>
                <div className="col tech-stack">
                    <div className="row justify-content-center tech-stack-title">
                        <div className="col-7">
                            <h5 className="text-white">Tools of the Trade</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <OverlayTrigger
                              placement='bottom'
                              key='bottom'
                              overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                  <strong>Github</strong>
                                </Tooltip>
                              }
                            >
                                <img className='tech-icon' src={Github} alt="Github" />
                            </ OverlayTrigger>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <OverlayTrigger
                              placement='bottom'
                              key='bottom'
                              overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                  <strong>Slack</strong>
                                </Tooltip>
                              }
                            >
                                <img className='tech-icon' src={Slack} alt="Github" />
                            </ OverlayTrigger>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <OverlayTrigger
                              placement='bottom'
                              key='bottom'
                              overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                  <strong>VS Code</strong>
                                </Tooltip>
                              }
                            >
                                <img className='tech-icon' src={VSCode} alt="Github" />
                            </ OverlayTrigger>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

