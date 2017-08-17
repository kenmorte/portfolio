import React, { Component } from 'react';
import { fadeInLeft, fadeInRight } from 'react-animations';
import VisibilitySensor from 'react-visibility-sensor';
import Scroll from 'react-scroll';
import { StyleSheet, css } from 'aphrodite';

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
        visibility: 'hidden'
    },

    fadeInLeft: {
        animationName: fadeInLeft,
        animationDuration: '0.75s',
    },

    fadeInRight: {
        animationName: fadeInRight,
        animationDuration: '0.75s',
    },
});

class WorkExperienceSection extends Component {
    constructor(props) {
        super(props);

        this.firstVisibility = true;

        this.workExperienceInfo = [
            {
                company: "Cadence Design Systems",
                url: "https://www.cadence.com/",
                startDate: 'June 2017',
                endDate: 'Present',
                description: 
                    "I'm currently a Software Engineering Intern for Cadence Design Systems this summer. " +
                    "I am utilizing React, Material-UI, and Javascript to implement various features into a web-app module. " +
                    "I am also working on a file system script to ease the workflow for our team."
            },
            {
                company: "Calit2 @ UCI",
                url: "http://www.calit2.uci.edu/",
                startDate: 'January 2017',
                endDate: 'Present',
                description: 
                    "I work as a software developer with Calit2 to build a product called \"PET: A Personal Embodied Trainer\". " +
                    "As one of the team leads, I assign and help out on various tasks to my teammates as well as design and code our application. " 
            },
            {
                company: "Sandia National Laboratories",
                url: "http://www.sandia.gov/",
                startDate: 'July 2016',
                endDate: 'Present',
                description: 
                    "As a R&D Technical Software Intern for Sandia, I implemented a command-line widget into an internal web application " +
                    "using C++ and the Wt library. I improved app performance by migrating server-side rendering to the client-side using " +
                    "D3.js. I am currently working part-time on an iOS project."
            },
            {
                company: "California Plug Load Research Center",
                url: "http://calplug.org/",
                startDate: 'January 2016',
                endDate: 'December 2016',
                description: 
                    "I was an iOS developer with CalPlug Research Center. I helped prototype an iPad application " +
                    "named \"EMMA: Energy Management and Monitoring Assistant\" that is showcased during " +
                    "quarterly workshops. Our team used Objective-C along with C++ to develop the app. "
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
            return (
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