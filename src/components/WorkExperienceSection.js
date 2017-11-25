import React, { Component } from 'react';
import { fadeInLeft, fadeInRight, fadeIn } from 'react-animations';
import VisibilitySensor from 'react-visibility-sensor';
import Scroll from 'react-scroll';
import { StyleSheet, css } from 'aphrodite';
import { isMobile } from '../helpers/helpers.js'
import '../css/timelinestyle.css';

/**************************************************************/
/* ------------------- React Scroll Members ----------------- */
/**************************************************************/
var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

const styles = StyleSheet.create({
    hidden: {
        visibility: 'hidden',
    },

    fadeInLeft: {
        animationName: fadeInLeft,
        animationDuration: '0.75s',
    },

    fadeInRight: {
        animationName: fadeIn,
        animationDuration: '1s',
        // animationDelay: '1s',
    },
});

class WorkExperienceSection extends Component {
    constructor(props) {
        super(props);

        this.firstVisibility = true;

        this.workExperienceInfo = [
            {
                company: "Cadence Design Systems",
                title: "Software Engineering Intern",
                location: "San Jose, CA",
                url: "https://www.cadence.com/",
                startDate: 'June 2017',
                endDate: 'September 2017',
                description: 
                    "This past summer I worked as a Software Engineering Intern for Cadence Design Systems. " +
                    "I utilized React, Material-UI, and Javascript to build the entire GUI for the Sigrity team's PCB T-Line analysis tool, which is released to companies such as Intel. " +
                    "I efficiently minimized load for our backend system by pre-processing the data passed in for the new modules that I created in the web app. " +
                    "I also improved and added new features into a curve analysis module GUI using React."
            },
            {
                company: "Calit2 @ UCI",
                title: "Software Developer",
                location: "Irvine, CA",
                url: "http://www.calit2.uci.edu/",
                startDate: 'January 2017',
                endDate: 'June 2017',
                description: 
                    "I worked as a software developer with Calit2 to build a product called \"PET: A Personal Embodied Trainer\". " +
                    "As one of the team leads, I assign and help out on various tasks to my teammates as well as design and code our application. " +
                    "I developed both the Android mobile app using Java/XML and the Chromecast web app using Angular." +
                    "Check out our project on the projects section below!"
            },
            {
                company: "Sandia National Laboratories",
                title: "R&D Software Engineering Intern",
                location: "Livermore, CA",
                url: "http://www.sandia.gov/",
                startDate: 'July 2016',
                endDate: 'Present',
                description: 
                    "As a R&D Technical Software Intern for Sandia, I implemented a command-line widget into an internal web application " +
                    "using C++ and the Wt library. I improved app performance by migrating server-side rendering to the client-side using " +
                    "D3.js. In addition, I am also working on a project utilizing D3.js to visualize real-time radioactive data coming in from a vehicle detector." 
            },
            {
                company: "California Plug Load Research Center",
                title: "iOS Developer",
                location: "Irvine, CA",
                url: "http://calplug.org/",
                startDate: 'January 2016',
                endDate: 'December 2016',
                description: 
                    "I was an iOS developer with CalPlug Research Center. I helped develop an iPad application " +
                    "named \"EMMA: Energy Management and Monitoring Assistant\" that is showcased during " +
                    "quarterly workshops. The app features a 3-D virtual assistant that can interact with the user and give feedback on their energy usage. Our team used Objective-C along with C++ to develop the app. "
            }
        ];

        this.state = {
            scrolledWorkIndex: -1,
            onMouseoverWorkIndex: -1,
        };
    }

    handleScrollActive = (currentWorkIndex) => {
        this.setState((prevState) => {
            return {
                scrolledWorkIndex: Math.max(prevState.scrolledWorkIndex, currentWorkIndex)
            };
        });
    }

    renderWorkExperienceInfo = () => {
        return this.workExperienceInfo.map((info, index) => {
            let visibilitySensor = <VisibilitySensor onChange={(isVisible) => {if (this.firstVisibility) { this.firstVisibility = false; return; } if (isVisible) this.handleScrollActive(index)}} />;     
            let expandStyleLabel = {position: 'absolute', right: 20, top: 50}; 
            return (
                <div key={"work-" + index} onMouseOver={() => this.setState({onMouseoverWorkIndex: index})} >
                    <div style={{position: 'relative', left: '3%', borderLeft: '2px solid black', width: '100%', paddingRight: 10}}>
                        <span 
                            className="glyphicon glyphicon-briefcase" 
                            style={{
                                zIndex: 0, 
                                fontSize: 20,
                                padding: 10, 
                                borderRadius: '50%', 
                                border: '1px solid black', 
                                position: 'relative',
                                left: '-50%',
                                top: 40,
                                background: 'white',
                                transform: this.state.onMouseoverWorkIndex === index ? 'scale(1.15)' : 'scale(1)',
                                transitionDuration: '0.3s',
                            }}
                        />
                        <div className={css(this.state.scrolledWorkIndex >= index ? styles.fadeInRight : styles.hidden)} 
                            style={{
                                marginLeft: 50, 
                                background: 'white', 
                                border: '1px solid black', 
                                padding: 10, 
                                borderRadius: 10, 
                                textAlign: 'left',
                            }}
                        >
                            {isMobile() ? visibilitySensor : null}
                            <h3 style={{fontWeight: 'bold', marginTop: 0}}>{info.title}</h3>
                            <h4 style={window.innerWidth >= 991 ? expandStyleLabel : null}>{info.startDate} - {info.endDate}</h4>
                            <h3 style={{marginTop: 0}}>{info.company} - {info.location}</h3>
                            <p style={{color: '#727878', fontSize: 18}}>{info.description}</p>
                            {!isMobile() ? visibilitySensor : null}
                        </div>
                    </div>
                </div>
                /*
                <div key={"work " + index}>
                    <VisibilitySensor onChange={(isVisible) => {if (this.firstVisibility) { this.firstVisibility = false; return; } if (isVisible) this.handleScrollActive(index)}} />
                        <div className="work-info" onMouseOver={() => this.setState({onMouseoverWorkIndex: index})}>
                            <div 
                                className={css(
                                    this.state.scrolledWorkIndex >= index ? 
                                        (
                                            index % 2 == 0 ? styles.fadeInRight : styles.fadeInLeft
                                        )
                                    : styles.hidden
                                )} 
                            >
                                <div className={"col-md-6 " + (index % 2 == 0 ? "work-right work-right2" : "work-left")}>
                                    <h4>{info.startDate} - {info.endDate}</h4>
                                </div>
                            </div>
                            <div 
                                className={css(
                                    this.state.scrolledWorkIndex >= index ? 
                                        (
                                            index % 2 == 0 ? styles.fadeInLeft : styles.fadeInRight
                                        )
                                    : styles.hidden
                                )} 
                            >
                                <div className={"col-md-6 " + (index % 2 == 0 ? "work-left work-left2" : "work-right")}>
                                    <a href={info.url}>
                                        <h5 style={{textDecoration: this.state.onMouseoverWorkIndex === index ? 'underline' : null}}>
                                            {index % 2 == 0 ? info.company : null}
                                            <span className="glyphicon glyphicon-briefcase" style={{zIndex: 0}} />
                                            {index % 2 == 1 ? info.company : null}
                                        </h5>
                                    </a>
                                    <p style={index % 2 == 0 ? { marginBottom: -12, color: '#727878' } : {color: '#727878'}}>{info.description}</p>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                </div>
                */
            );
        });
    }

    render() {
        return (
            <div id="work" className="work">
                <div className="container" style={{marginBottom: 50}}>
                    {this.renderWorkExperienceInfo()}
                </div>
            </div>
        );
    }
}

export default WorkExperienceSection;