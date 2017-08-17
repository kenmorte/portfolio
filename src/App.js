import React, { Component } from 'react';
import Scroll from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor';
import { fadeInUp, fadeInDown } from 'react-animations';
import Headroom from 'react-headroom';
import { StyleSheet, css } from 'aphrodite';
import Header from './components/HeaderSection.js';
import AboutMeSection from './components/AboutMeSection.js';
import WorkExperienceSection from './components/WorkExperienceSection.js';
import SkillsSection from './components/SkillsSection.js';
import ProjectsSection from './components/ProjectsSection.js';
import ContactSection from './components/ContactSection.js';
import Section from './components/Section.js';
import profilePic from './img/me.jpg';
import 'babel-polyfill';
import './index.css';
import './css/Typist.css';
import './css/timelinestyle.css';

/**************************************************************/
/* ------------------- Navbar Inline-Styles ----------------- */
/**************************************************************/
const styles = StyleSheet.create({
  navButton: {
    color: 'white', 
    background: 'black', 
    textDecoration: 'none', 
    fontFamily: 'monospace', 
    padding: 10,
    border: 'none',
  },

  navHeader: {
    color: 'white', 
    background: 'black', 
    textDecoration: 'none', 
    fontSize: 24, 
    fontFamily: 'monospace', 
    position: 'absolute', 
    left: '1em', 
    top: '16%',
  },

  highlightedNavButtonStyle: {
    background: 'whitesmoke',
    color: 'black',
    borderRadius: '5px',
  },

  activeNavbarButton: {
    textDecoration: 'underline',
  },
  navigationBar: {
    position: 'sticky',
    top: '0px',
    zIndex: 9999,
  }
});

const NORMAL_PROJECT_IMG_STYLE = {
  transform: 'scale(1)',
  left: 0
};
const HIGHLIGHTED_PROJECT_IMG_STYLE = {
  transform: 'scale(1.1)',
  left: 0
};

/**************************************************************/
/* ------------------- React Scroll Members ----------------- */
/**************************************************************/
var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;
var scroller   = Scroll.scroller;


document.addEventListener("touchstart", function(){}, true);

class App extends Component {
  constructor(props) {
    super(props);

    this.mainColor = "rgb(24, 46, 70)";
    this.subColor = "#DDDDDD";

    // For Header section
    this.subtitles = [
      "Aspiring Software Engineer",
      "Mobile App Developer",
      "Video Game Fanatic",
      "Computer Science Engineering Student",
      "Basketball Player",
      "Web Developer",
    ];

    this.navbarButtons = {
      HEADER: -1,
      ABOUT_ME: 0,
      WORK_EXPERIENCE: 1,
      SKILLS: 2,
      PROJECTS: 3,
      CONTACT: 4,
    };

    this.defaultAnimationSettings = {
      duration: 500,
      smooth: true,
    }

    this.maxHeaderWidth = 866;

    this.state = {
      mainTitle: "Christian Morte",
      mouseoverNavbarButton: null,
      width: 0,
      showAlternativeMenu: false,
    };
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    window.addEventListener("resize", this.updateDimensions);
    scrollSpy.update();
  }

  componentWillMount = () => {
    document.addEventListener('click', this.handleClick, false);
    this.updateDimensions();
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
    document.removeEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  handleClick = (event) => {
    if (!this.refs.alternativeMenu) {
      return;
    }
    if (!this.refs.alternativeMenu.contains(event.target)) {
      this.setState({showAlternativeMenu: false});
    }
  }

  updateDimensions = () => {
    this.setState({width: window.innerWidth});
    if (window.innerWidth > this.maxHeaderWidth) {
      this.setState({showAlternativeMenu: false});
    }
  }

  aboutMeSectionBody = () => {
    return (
      <AboutMeSection
        scrolledOnAboutMeWidgets={this.state.scrolledOnAboutMeWidgets}
        textColor={this.subColor}
      />
    );
  }

  workExperienceSectionBody() {
    return (
      <WorkExperienceSection
      />
    );
  }

  skillsSectionBody() {
    return (
      <SkillsSection
        mainColor={this.mainColor}
        textColor={this.subColor}
      />
    );
  }

  projectsSectionBody() {
    return (
      <ProjectsSection
      />
    );
  }

  contactSectionBody() {
    return (
      <ContactSection />
    );
  }

  render() {
    return (
      <div>
        <div className={css(styles.navigationBar)}>
          <div ref={(headroom) => this.headroom = headroom} style={{ width: '100%', height: '4em', background: 'black', opacity: 0.8}}>
            <div className="container">
              <button 
                onClick={(e) => {
                  e.target.blur();
                  scroller.scrollTo("header", this.defaultAnimationSettings);
                }}
                className={css(styles.navHeader)}
                style={{border: 'none'}}>
                  Christian Morte
              </button>
              {
                this.state.width > this.maxHeaderWidth ?
                  <ul className="list-inline" style={{position: 'absolute', top: '10%', right: '4em', fontSize: 14}}>
                    <li>
                        <button 
                          className={css(
                            styles.navButton, 
                            this.state.mouseoverNavbarButton === this.navbarButtons.ABOUT_ME ? styles.highlightedNavButtonStyle : null,
                            this.state.activeNavbarButton === this.navbarButtons.ABOUT_ME ? styles.activeNavbarButton : null,
                          )} 
                          onMouseOver={() => this.setState({mouseoverNavbarButton: this.navbarButtons.ABOUT_ME})}
                          onMouseOut={() => this.setState({mouseoverNavbarButton: null})}
                          onClick={(e) => {
                            e.target.blur();
                            scroller.scrollTo("about-me", this.defaultAnimationSettings);
                          }}
                        >
                          About Me
                        </button>
                    </li>
                    <li>
                        <button 
                          className={css(
                            styles.navButton, 
                            this.state.mouseoverNavbarButton === this.navbarButtons.WORK_EXPERIENCE ? styles.highlightedNavButtonStyle : null,
                            this.state.activeNavbarButton === this.navbarButtons.WORK_EXPERIENCE ? styles.activeNavbarButton : null,
                          )}                       
                          onMouseOver={() => this.setState({mouseoverNavbarButton: this.navbarButtons.WORK_EXPERIENCE})}
                          onMouseOut={() => this.setState({mouseoverNavbarButton: null})}
                          onClick={(e) => {
                            e.target.blur();
                            scroller.scrollTo("work-experience", this.defaultAnimationSettings);
                          }}
                        >
                          Work Experience
                        </button>
                    </li>
                    <li>
                      <button 
                        className={css(styles.navButton, this.state.mouseoverNavbarButton === this.navbarButtons.SKILLS ? styles.highlightedNavButtonStyle : null)} 
                        onMouseOver={() => this.setState({mouseoverNavbarButton: this.navbarButtons.SKILLS})}
                        onMouseOut={() => this.setState({mouseoverNavbarButton: null})}
                        onClick={(e) => {
                          e.target.blur();
                          scroller.scrollTo("skills", this.defaultAnimationSettings);
                        }}
                      >
                        Skills
                      </button>
                    </li>
                    <li>
                      <button 
                        className={css(styles.navButton, this.state.mouseoverNavbarButton === this.navbarButtons.PROJECTS ? styles.highlightedNavButtonStyle : null)} 
                        onMouseOver={() => this.setState({mouseoverNavbarButton: this.navbarButtons.PROJECTS})}
                        onMouseOut={() => this.setState({mouseoverNavbarButton: null})}
                        onClick={(e) => {
                          e.target.blur();
                          scroller.scrollTo("projects", this.defaultAnimationSettings);
                        }}
                      >
                        Projects
                      </button>
                    </li>
                    <li>
                      <button 
                        className={css(styles.navButton, this.state.mouseoverNavbarButton === this.navbarButtons.CONTACT ? styles.highlightedNavButtonStyle : null)} 
                        onMouseOver={() => this.setState({mouseoverNavbarButton: this.navbarButtons.CONTACT})}
                        onMouseOut={() => this.setState({mouseoverNavbarButton: null})}
                        onClick={(e) => {
                          e.target.blur();
                          scroller.scrollTo("contact", this.defaultAnimationSettings);
                        }}
                      >
                        Contact
                      </button>
                    </li>
                  </ul>
                :
                  <i 
                    className="fa fa-bars" 
                    ariaHdden="true" 
                    style={{color: 'white', fontSize: 25, position: 'absolute', top: '25%', right: '1em', cursor: 'pointer'}}
                    onClick={() => this.setState((prevState) => { return {showAlternativeMenu: !prevState.showAlternativeMenu}})}></i>
              }
              {
                this.state.showAlternativeMenu ?
                  <div ref="alternativeMenu" style={{position: 'absolute', top: '100%', width: '100%', left: 0, height: 100, background: 'blue'}}>
                  </div>
                : null
              }

            </div>
          </div>
        </div>
        <Element name="header" className="element">
          <Header
            mainTitle={this.state.mainTitle}
            subtitles={this.subtitles} />
        </Element>
        <Element name="about-me" className="element">
          <Section
            title="About Me"
            subtitle="A passionate developer eager to learn and use new technologies."
            backgroundColor={this.mainColor}
            titleColor="white"
            subtitleColor={this.subColor}
            sectionBody={this.aboutMeSectionBody()} />
        </Element>
        <Element name="work-experience" className="element">
          <Section
            title="Work Experience"
            subtitle="My professional experience history"
            backgroundColor={this.subColor}
            sectionBody={this.workExperienceSectionBody()} />
        </Element>
        <Element name="skills" className="element">
          <Section
            title="Skills"
            subtitle="I work with many programming languages and frameworks, including:"
            backgroundColor={this.mainColor}
            titleColor="white"
            subtitleColor={this.subColor}
            sectionBody={this.skillsSectionBody()} />
        </Element>
        <Element name="projects" className="element">
          <Section
            title="Projects"
            subtitle="Things I did for my coursework and on my spare time."
            backgroundColor={this.subColor}
            sectionBody={this.projectsSectionBody()} />
        </Element>
        <Element name="contact" className="element">
          <Section 
            title="Contact"
            subtitle="Let's get in touch. I'm available on the following platforms:"
            backgroundColor={this.mainColor}
            titleColor="white"
            subtitleColor={this.subColor}
            sectionBody={this.contactSectionBody()} />
        </Element>
      </div>
    );
  }
}

export default App;
