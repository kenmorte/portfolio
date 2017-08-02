import React, { Component } from 'react';
import { fadeInUp, fadeInDown, fadeOutUp, fadeOutDown } from 'react-animations';
import Scroll from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor';
import { StyleSheet, css } from 'aphrodite';
import { isMobile } from '../helpers/helpers.js';
import profilePic from '../img/me.jpg';
import '../App.css';
import '../css/style.css';

/**************************************************************/
/* ------------------- React Scroll Members ----------------- */
/**************************************************************/
var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;


/**************************************************************/
/* ------------------ About Me Inline-Styles ---------------- */
/**************************************************************/
const aboutMeStyles = StyleSheet.create({
    hidden: {
        visibility: 'hidden'
    },

    fadeInUp: {
        animationName: fadeInUp,
        animationDuration: '0.75s',
    },

    widget: {
        textAlign: 'center',
    }
});


class AboutMeSection extends Component {
    constructor(props) {
        super(props);

        // Section description
        this.description = 
            "I am a fourth-year Computer Science and Engineering undergraduate student at UC Irvine. " +
            "I love working with all sorts of technology, and am always seeking to learn the latest trends in the industry. " +
            "Check out some of my past experiences, projects, and skills below!";
        
        // Widget description info
        this.widgets = {
            left: {
                title: "Mobile",
                icon: "fa-mobile",
                description: "I develop apps for both Android and iOS. This summer, I hope to release my first app on the App Store."
            },

            mid: {
                title: "Web",
                icon: "fa-desktop",
                description: "I helped create various web applications using a variety of frameworks and libraries for Javascript, HTML, and CSS."
            },

            right: {
                title: "Engineer",
                icon: "fa-cogs",
                description: "I love to build things from scratch. I have experience working with both hardware and software."
            },
        };

        // Animation delay for widgets
        this.animationDelay = 250; // ms

        this.state = {

            // To keep track of scroll position in section
            scrolledOnAboutMeWidgets: false,

            isLeftWidgetVisible: false,
            isMidWidgetVisible: false,
            isRightWidgetVisible: false,

            // To keep track of the animated widgets in this section
            isLeftWidgetAnimated: false,
            isMidWidgetAnimated: false,
            isRightWidgetAnimated: false,

            // To keep track of mouse events on widgets
            isMouseoverLeftWidget: false,
            isMouseoverMidWidget: false,
            isMouseoverRightWidget: false,
        };
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', function(to, element) {
        console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function(to, element) {
        console.log("end", arguments);
        });
    
        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    handleScrollActive = (toElement) => {

        // We are using a different way of animating for mobile devices
        //  Cancel the scroll events if user is using mobile device
        if (isMobile()) {
            return;
        }

        switch (toElement) {
            case 'AboutMeWidgets':
                if (!this.state.scrolledOnAboutMeWidgets) {
                    this.animateWidgets(this.animationDelay);
                }

                break;

            default:
                break;
        }
    }

    animateWidgets = (animationDelay) => {
        this.setState({scrolledOnAboutMeWidgets: true, isLeftWidgetAnimated: true},
            () => {
                const midWidgetAnimationTimeout = setTimeout(() => {
                    this.setState({isMidWidgetAnimated: true}, 
                        () => {
                            const rightWidgetAnimationTimeout = setTimeout(() => {
                                this.setState({isRightWidgetAnimated: true});
                                clearTimeout(midWidgetAnimationTimeout);
                                clearTimeout(rightWidgetAnimationTimeout);

                            }, animationDelay);
                        }
                    );
                }, animationDelay);
            }
        );
    }

    render() {
        return (
            <div>
                <img
                    src={profilePic}
                    alt="profilePic"
                    className="profile-pic" 
                />
                <div className="about-me-section">
                    {this.description}
                </div>
                <div className="container">
                    <VisibilitySensor onChange={(isVisible) => {if (isVisible && !isMobile()) this.animateWidgets(this.animationDelay)}} />
                    <div className="row">
                        <div 
                            className="col-sm-4" 
                            onMouseOver={() => this.setState({isMouseoverLeftWidget: true})}
                            onMouseOut={() => this.setState({isMouseoverLeftWidget: false})}
                            onTouchStart={() => this.setState({isMouseoverLeftWidget: true, isMouseoverMidWidget: false, isMouseoverRightWidget: false})}
                        >
                            <VisibilitySensor onChange={(isVisible) => {if (isVisible && isMobile()) this.setState({isLeftWidgetAnimated: true})}} />
                            <div className={css(this.state.isLeftWidgetAnimated ? aboutMeStyles.fadeInUp : aboutMeStyles.hidden)}>
                                <div 
                                    className={css(aboutMeStyles.widget)}
                                    style={{transform: this.state.isMouseoverLeftWidget ? 'scale(1.05)' : 'scale(1)', transitionDuration: '0.2s'}}
                                >
                                    <i className={"fa " + this.widgets.left.icon + " fa-5x icon"}></i>
                                    <p style={{color: this.props.textColor}}>{this.widgets.left.title}</p>
                                    <i className="fa fa-minus fa-2x"></i>
                                    <p style={{color: this.props.textColor}}>{this.widgets.left.description}</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div 
                            className="col-sm-4" 
                            onMouseOver={() => this.setState({isMouseoverMidWidget: true})}
                            onMouseOut={() => this.setState({isMouseoverMidWidget: false})}
                            onTouchStart={() => this.setState({isMouseoverLeftWidget: false, isMouseoverMidWidget: true, isMouseoverRightWidget: false})}
                        >
                            <VisibilitySensor onChange={(isVisible) => {if (isVisible && isMobile()) this.setState({isMidWidgetAnimated: true})}} />
                            <div className={css(this.state.isMidWidgetAnimated ? aboutMeStyles.fadeInUp : aboutMeStyles.hidden)}>
                                <div 
                                    className={css(aboutMeStyles.widget)}
                                    style={{transform: this.state.isMouseoverMidWidget ? 'scale(1.05)' : 'scale(1)', transitionDuration: '0.2s'}}
                                >
                                    <i className={"fa " + this.widgets.mid.icon + " fa-5x icon"}></i>
                                    <p style={{color: this.props.textColor}}>{this.widgets.mid.title}</p>
                                    <i className="fa fa-minus fa-2x"></i>
                                    <p style={{color: this.props.textColor}}>{this.widgets.mid.description}</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div 
                            className="col-sm-4" 
                            onMouseOver={() => this.setState({isMouseoverRightWidget: true})}
                            onMouseOut={() => this.setState({isMouseoverRightWidget: false})}
                            onTouchStart={() => this.setState({isMouseoverLeftWidget: false, isMouseoverMidWidget: false, isMouseoverRightWidget: true})}
                        >
                            <VisibilitySensor onChange={(isVisible) => {if (isVisible && isMobile()) this.setState({isRightWidgetAnimated: true})}} />
                            <div className={css(this.state.isRightWidgetAnimated ? aboutMeStyles.fadeInUp : aboutMeStyles.hidden)}>
                                <div 
                                    className={css(aboutMeStyles.widget)}
                                    style={{transform: this.state.isMouseoverRightWidget ? 'scale(1.05)' : 'scale(1)', transitionDuration: '0.2s'}}
                                >
                                    <i className={"fa " + this.widgets.right.icon + " fa-5x icon"}></i>
                                    <p style={{color: this.props.textColor}}>{this.widgets.right.title}</p>
                                    <i className="fa fa-minus fa-2x"></i>
                                    <p style={{color: this.props.textColor}}>{this.widgets.right.description}</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMeSection;