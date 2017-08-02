import React, { Component } from 'react';
import { fadeIn, fadeInUp, fadeInDown, fadeOutUp, fadeOutDown } from 'react-animations';
import VisibilitySensor from 'react-visibility-sensor';
import Scroll from 'react-scroll';
import { StyleSheet, css } from 'aphrodite';
import { isMobile } from '../helpers/helpers.js';
import QuickAppt from '../img/quickappt.png';
import Pet from '../img/pet.png';
import Fabflix from '../img/fabflix.png';
import Courtfinder from '../img/courtfinder.jpeg';
import Emma from '../img/emma.png';
import MultiplicationFlashCards from '../img/mult.png';
import 'babel-polyfill';

const NORMAL_PROJECT_IMG_STYLE = {
  transform: 'scale(1)',
  left: 0
};
const HIGHLIGHTED_PROJECT_IMG_STYLE = {
  transform: 'scale(1.1)',
  left: 0
};

document.addEventListener("touchstart", function(){}, true);

const styles = StyleSheet.create({
  hidden: {
    visibility: 'hidden'
  },


  /**************************************************************/
  /* ----------------------- Image Styles --------------------- */
  /**************************************************************/
  normalProjectImgStyle: {
    transform: 'scale(1)',
    left: 0
  },
  highlightedProjectImgStyle: {
    transform: 'scale(1.1)',
    left: 0
  },

  /**************************************************************/
  /* --------------------- Animation Styles ------------------- */
  /**************************************************************/
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s',
  },
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: '0.5s',
  },
  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: '0.5s',
  },
  fadeOutUp: {
    animationName: fadeOutUp,
    animationDuration: '0.5s',
  },
  fadeOutDown: {
    animationName: fadeOutDown,
    animationDuration: '0.5s',
  },

  /**************************************************************/
  /* ----------------- Project Section Styles ----------------- */
  /**************************************************************/
  project: {
    display: 'inline-block',
    margin: '10px',
    position: 'relative',
    overflow: 'hidden',
    background: 'white',
    maxWidth: '90%',
    border: '1px solid black',
    width: '25em',
    height: '25em',
  },
  projectImg: {
    padding: '10px',
    width: '100%',
    height: 'auto',
    position: 'relative',
    transition: 'all 0.2s',
  },
  projectInfo: {
    position: 'absolute',
    top: '0',
    left: '0',
    lineHeight: '30px',
    background: 'rgba(34, 34, 34, 0.75)',
    height: '100%',
    padding: '30px',
    boxSizing: 'border-box',
    color: 'white',
    transition: 'all 0.25s',
  },
  projectInfoHighlighted: {
      opacity: '1',
  },
  projectInfoNormal: {
      opacity: '0'
  },
  projectName: {
    fontSize: 24,
    marginBottom: 10,
    paddingBottom: 20,
    borderBottom: '3px solid white',
    textAlign: 'center',
    marginTop: 0,
    opacity: 1,
  },
  projectText: {
    position: 'relative',
    top: 5,
    marginBottom: 20,
  },
  projectLeftButton: {
    width: '50%'
  }
});

/**************************************************************/
/* ------------------- React Scroll Members ----------------- */
/**************************************************************/
var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;



class ProjectsSection extends Component {
    constructor(props) {
        super(props);

        this.projects = [
            {
                name: "PET: A Personal Embodied Trainer",
                img: Pet,
                date: new Date(2017, 1),
                srcUrl: "https://github.uci.edu/etad-calit2/PET",
                mediaUrl: "https://youtu.be/I_wu1lDd--o",
                mediaIcon: "fa fa-youtube-play",
                mediaText: "Watch demo",
                text: 
                    "Exercise app featuring an avatar model to motivate and gamify physical activity. " +
                    "PET has been recognized in UC Irvine's MDP and UROP Symposiums.",
            },
            {
                name: "QuickAppt",
                img: QuickAppt,
                date: new Date(2016, 11),
                srcUrl: "https://github.com/aclorta/QuickAppt",
                text: 
                    "Android app buit during the UC Irvine Med AppJam Hackathon. " +
                    "Connects patients and physicians together for easier appointment booking and management.",
            },
            {
                name: "FabFlix",
                img: Fabflix,
                date: new Date(2017, 3),
                srcUrl: "https://github.com/kenmorte/FabFlix",
                mediaUrl: "http://35.185.205.49/FabFlix/#!/home",
                mediaIcon: "fa fa-sign-out",
                mediaText: "Demo the app",
                text: 
                    "FabFlix is a movie e-commerce web application built in one of my project courses. " +
                    "The application featured a fully-functional front-end written in AngularJS and backend " + 
                    "using JDBC, Java, and MySQL.",
                style: {top: '15%'}
            },
            {
                name: "Court Finder",
                img: Courtfinder,
                date: new Date(2016, 6),
                srcUrl: "https://github.com/kenmorte/Court-Finder",
                text: 
                    "This is an in-progress iOS application that not only helps users find local basketball courts in their area, " +
                    "but find out the the best time to play and the competition in the area. The backend utilizes NodeJS and MongoDB.",
                style: {top: '15%'}
            },
            {
                name: "EMMA: Energy Monitor Management Assistant",
                img: Emma,
                date: new Date(2016, 1),
                text: "iPad application that featured a 3D virtual assistant to help guide and manage power usage inside a smart home.",
                srcUrl: "https://github.com/Calit2-UCI/EMMA-FINAL",
                mediaUrl: "http://sites.uci.edu/calit2files/files/2016/11/05LXia.pdf",
                mediaIcon: "fa fa-file-text-o",
                mediaText: "See the project",
                style: {top: '15%'}
            },
            {
                name: "Multiplication Flash Cards",
                img: MultiplicationFlashCards,
                text: "One of my first programming projects I made. The app featured a GUI built using Python and Tkinter library.",
                srcUrl: "https://github.com/kenmorte/Multiplication-Flash-Cards",
                style: {top: '5%'}
            },
        ];

        this.state = {
            visibleProjects: new Set(),

            highlightedProjectIndex: null,
            highlightedProjectSrcButtonIndex: null,
            highlightedProjectMediaButtonIndex: null,
        };
    }

    onMouseOverProject(index, event) {
        this.setState({ highlightedProjectIndex: index });
    }

    onMouseOutProject(index, event) {
        this.setState({ highlightedProjectIndex: null });
    }

    onMouseOverProjectSrcButton(index, event) {
        this.setState({highlightedProjectSrcButtonIndex: index});
    }

    onMouseOutProjectSrcButton(index, event) {
        this.setState({ highlightedProjectSrcButtonIndex: null });
    }

    onMouseOverProjectMediaButton(index, event) {
        this.setState({highlightedProjectMediaButtonIndex: index});
    }

    onMouseOutProjectMediaButton(index, event) {
        this.setState({ highlightedProjectMediaButtonIndex: null });
    }

    render() {

        const interestImgStyle = {
            width: '100%',
            position: 'relative',
            WebkitTransition: 'all 0.2',
            msTransition: 'all 0.2s'
        };

        const normalProjectButtonStyle = {
            width: '50%',
            position: 'relative',
            color: 'white',
            background: 'rgba(34, 34, 34, 0)',
            WebkitTransition: 'all 0.2',
            msTransition: 'all 0.2s',
            transition: 'all 0.2s',
            border: '1px solid white'
        };

        const highlightedProjectButtonStyle = {
            width: '50%',
            position: 'relative',
            background: 'rgba(255,255,255,1)',
            color: 'rgba(34, 34, 34, 1)',
            WebkitTransition: 'all 0.2',
            msTransition: 'all 0.2s',
            transition: 'all 0.2s',
            border: '1px solid rgba(34,34, 34, 1)'
        };

        const sectionBody = this.projects.map((project, projectIndex) => {

            // Interaction booleans
            const isHighlighted = this.state.highlightedProjectIndex === projectIndex;
            const isSrcButtonHighlighted = this.state.highlightedProjectSrcButtonIndex === projectIndex;
            const isMediaButtonHighlighted = this.state.highlightedProjectMediaButtonIndex === projectIndex;

            // Style booleans
            const imgStyle = Object.assign({},
                interestImgStyle,
                isHighlighted ? styles.highlightedProjectImgStyle : styles.normalProjectImgStyle);

            // Project member booleans
            const hasProjectSrcUrl = !!project.srcUrl;
            const hasProjectMediaUrl = !!project.mediaUrl;

            return (
                <div
                    className={css(styles.project, this.state.visibleProjects.has(projectIndex) ? styles.fadeIn : styles.hidden)}
                    onTouchStart={this.onMouseOverProject.bind(this, projectIndex)}
                    onMouseOver={this.onMouseOverProject.bind(this, projectIndex)}
                    onMouseOut={this.onMouseOutProject.bind(this, projectIndex)}
                    key={"project#" + projectIndex}
                    style={{borderRadius: 10}}
                >
                    <img
                        src={project.img}
                        className={css(styles.projectImg, isHighlighted ? styles.highlightedProjectImgStyle : styles.normalProjectImgStyle)}
                        key={"projectimg#" + projectIndex}
                        style={Object.assign({}, {borderRadius: 10}, project.style ? project.style : {})}
                    />
                    <div 
                        className={css(styles.projectInfo, isHighlighted ? styles.projectInfoHighlighted : styles.projectInfoNormal)}
                    >
                        <div
                            className={isHighlighted ? css(styles.fadeInDown, styles.projectName) : css(styles.fadeOutUp, styles.projectName)}
                            key={"projectname#" + projectIndex}
                        >
                        {project.name}
                        </div>
                        <div
                            className={isHighlighted ? css(styles.fadeInUp, styles.projectText) : css(styles.fadeOutDown, styles.projectText)}
                            key={"projectText#" + projectIndex} 
                        >
                            {project.text}
                        </div>
                        <div className={isHighlighted ? css(styles.fadeInUp) : css(styles.fadeOutDown)}>
                            {hasProjectSrcUrl ?
                                <a
                                target="_blank"
                                href={project.srcUrl}
                                className="btn btn-primary"
                                onMouseOver={this.onMouseOverProjectSrcButton.bind(this, projectIndex)}
                                onMouseOut={this.onMouseOutProjectSrcButton.bind(this, projectIndex)}
                                style={Object.assign({}, hasProjectMediaUrl ? {left: '-3%'} : {}, isSrcButtonHighlighted ? highlightedProjectButtonStyle : normalProjectButtonStyle)} >
                                <i className="fa fa-code"></i>  Source Code
                                </a> :
                                null
                            }
                            {
                                hasProjectMediaUrl ? 
                                <a
                                    target="_blank"
                                    href={project.mediaUrl}
                                    className="btn btn-primary"
                                    onMouseOver={this.onMouseOverProjectMediaButton.bind(this, projectIndex)}
                                    onMouseOut={this.onMouseOutProjectMediaButton.bind(this, projectIndex)}
                                    style={Object.assign({}, hasProjectMediaUrl ? {left: '3%'} : {}, isMediaButtonHighlighted ? highlightedProjectButtonStyle : normalProjectButtonStyle)} >
                                    <i className={project.mediaIcon}></i>    {project.mediaText}
                                </a> :
                                null
                            }
                        </div>
                    </div>
                    <VisibilitySensor 
                        onChange={(isVisible) => {
                            if (isVisible)
                                this.setState((prevState) => {prevState.visibleProjects.add(projectIndex); return prevState;})
                            }
                        }
                    />
                </div>
            );
        });

        return (
        <div style={{ opacity: 1, top: 0 }}>
            {sectionBody}
        </div>
        );
    }
}

export default ProjectsSection;