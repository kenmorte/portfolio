import React, { Component } from 'react';
import Scroll from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor';
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
import './App.css';
import './css/Typist.css';
import './css/style.css';
import './css/timelinestyle.css';

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


document.addEventListener("touchstart", function(){}, true);

class App extends Component {
  constructor(props) {
    super(props);

    this.mainColor = "#4C5364";
    this.subColor = "#DDDDDD";

    // For Header section
    this.subtitles = [
      "Aspiring Software Engineer",
      "Mobile App Developer",
      "Video Game Fanatic",
      "Computer Science Engineering Student",
      "Basketball Player",
      "Web Developer",
    ]

    this.state = {
      mainTitle: "Christian Morte",
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
        <Header
          mainTitle={this.state.mainTitle}
          subtitles={this.subtitles} />
        <Section
          title="About Me"
          subtitle="A passionate developer eager to learn and use new technologies."
          backgroundColor={this.mainColor}
          titleColor="white"
          subtitleColor={this.subColor}
          sectionBody={this.aboutMeSectionBody()} />
        <Section
          title="Work Experience"
          subtitle="My professional experience history"
          backgroundColor={this.subColor}
          sectionBody={this.workExperienceSectionBody()} />
        <Section
          title="Skills"
          subtitle="I work with many programming languages and frameworks, including:"
          backgroundColor={this.mainColor}
          titleColor="white"
          subtitleColor={this.subColor}
          sectionBody={this.skillsSectionBody()} />
        <Section
          title="Projects"
          subtitle="Things I did for my coursework and on my spare time."
          backgroundColor={this.subColor}
          sectionBody={this.projectsSectionBody()} />
        <Section 
          title="Contact"
          subtitle="Let's get in touch. I'm available on the following platforms:"
          backgroundColor={this.mainColor}
          titleColor="white"
          subtitleColor={this.subColor}
          sectionBody={this.contactSectionBody()} />
      </div>
    );
  }
}

export default App;
