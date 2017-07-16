import React, { Component } from 'react';
import { fadeInUp, fadeInDown, fadeOutUp, fadeOutDown } from 'react-animations';
import Scroll from 'react-scroll';
import { StyleSheet, css } from 'aphrodite';
import Header from './components/HeaderSection.js';
import AboutMeSection from './components/AboutMeSection.js';
import Section from './components/Section.js';
import projectPic from './img/macrumors.png';
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

const styles = StyleSheet.create({
  hiddenNoSpace: {
    display: 'none'
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

class App extends Component {
  constructor(props) {
    super(props);

    this.mainColor = "white";
    this.subColor = "#F5F1DE";

    // For Header section
    this.subtitles = [
      "Aspiring Software Engineer",
      "Mobile App Developer",
      "Final Fantasy Fanatic",
      "Computer Science Engineering Student",
      "Basketball Player",
      "Web Developer",
      "Guitar Player"
    ]

    // For Projects section
    this.projects = [
      {
        name: "The Verge",
        img: projectPic,
        text: "One of the top sites to go to for technology news. Been following it since it was \"This is my Next\".",
        srcUrl: "http://www.macrumors.com/",
      },
      {
        name: "The Verge",
        img: projectPic,
        text: "One of the top sites to go to for technology news. Been following it since it was \"This is my Next\".",
        srcUrl: "http://www.macrumors.com/",
        mediaUrl: "http://www.youtube.com/",
        mediaIcon: "fa fa-sign-out",
      },
      {
        name: "The Verge",
        img: projectPic,
        text: "One of the top sites to go to for technology news. Been following it since it was \"This is my Next\".",
        srcUrl: "http://www.macrumors.com/",
        mediaUrl: "http://www.youtube.com/",
        mediaIcon: "fa fa-youtube-play",
      },
      {
        name: "The Verge",
        img: projectPic,
        text: "One of the top sites to go to for technology news. Been following it since it was \"This is my Next\".",
        srcUrl: "http://www.macrumors.com/",
        mediaUrl: "http://www.youtube.com/",
        mediaIcon: "fa fa-youtube-play",
      },
    ];

    this.state = {
      mainTitle: "Christian Morte",

      highlightedProjectIndex: null,
      highlightedProjectSrcButtonIndex: null,
      highlightedProjectMediaButtonIndex: null,
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

  aboutMeSectionBody = () => {
    return (
      <AboutMeSection
        scrolledOnAboutMeWidgets={this.state.scrolledOnAboutMeWidgets}
      />
    );
  }

  workExperienceSectionBody() {
    return (
      <div id="work" className="work">
        <div className="container">
          <div className="work-info">
            <div className="col-md-6 work-right work-right2">
              <h4>Dec 2016 - Jan 2017 </h4>
            </div>
            <div className="col-md-6 work-left work-left2">
              <a href="http://www.alphonso.tv/"><h5> Alphonso Inc <span className="glyphicon glyphicon-briefcase"> </span></h5></a>
              <p style={{ marginBottom: -12 }}> I worked as winter intern with Alphonso Inc. I developed a custom skill for Alphonso on ​ Amazon Alexa Skill ​invoked using Amazon Echo or dot (A smart speaker developed by Amazon). The skill can give various interesting insights about television viewership using Alphonso APIs.</p>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="work-info">
            <div className="col-md-6 work-left">
              <h4>May 2016 - Jul 2016 </h4>
            </div>
            <div className="col-md-6 work-right">
              <a href="https://www.hackerrank.com/interns/2016"><h5><span className="glyphicon glyphicon-briefcase"> </span> HackerRank</h5></a>
              <p>I worked as a Software developer intern at Hackerrank in Summer 2016. I worked on refactoring the Codechecker code, implemented parallel test cases execution for single submission, improved DroidRank platform, and created Android questions for it using Espresso framework. </p>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="work-info">
            <div className="col-md-6 work-right work-right2">
              <h4>Dec 2015 - Present </h4>
            </div>
            <div className="col-md-6 work-left work-left2">
              <h5> Women Who Code, Delhi <span className="glyphicon glyphicon-briefcase"> </span></h5>
              <p> I am Community Organiser at WWC Delhi. WWC is a non-profit dedicated to inspiring women to excel in technology careers. We provide an avenue into tech, empower women with skills needed for professional advancement, and provide environments where networking and mentor-ship are valued.</p>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    );
  }

  skillsSectionBody() {
    return (
      <div className="skill-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className=" flipInY">
                <h2>Programming Languages</h2>
              </div>
              <div className="bars">
                <ul className="skills" style={{ background: this.mainColor }}>
                  <li>
                    <span className="bar-expand html5 fonts revealOnScroll animated fadeInLeft" data-animation="fadeInLeft" data-timeout="500">HTML5</span>
                  </li>
                  <li>
                    <span className="bar-expand css fonts revealOnScroll animated fadeInLeft" data-animation="fadeInLeft" data-timeout="500">CSS3</span>
                  </li>
                  <li>
                    <span className="bar-expand java fonts revealOnScroll animated fadeInLeft" data-animation="fadeInLeft" data-timeout="500">Java</span>
                  </li>
                  <li>
                    <span className="bar-expand cplusplus fonts revealOnScroll" data-animation="fadeInLeft" data-timeout="500">C</span>
                  </li>
                  <li>
                    <span className="bar-expand javascript fonts revealOnScroll" data-animation="fadeInLeft" data-timeout="500">JavaScript</span>
                  </li>
                  <li>
                    <span className="bar-expand python fonts revealOnScroll" data-animation="fadeInLeft" data-timeout="500">Python</span>
                  </li>
                </ul>
              </div>
              <br />
            </div>

            <div className="col-md-6">
              <div className=" flipInY">
                <h2>Engineering</h2>
              </div>
              <div className="bars">
                <ul className="skills" style={{ background: this.mainColor }}>
                  <li>
                    <span className="bar-expand autodesk fonts revealOnScroll animated fadeInLeft" data-animation="fadeInLeft" data-timeout="500">Autodesk Inventor</span>
                  </li>
                  <li>
                    <span className="bar-expand soldering fonts revealOnScroll animated fadeInLeft" data-animation="fadeInLeft" data-timeout="500">Soldering</span>
                  </li>
                  <li>
                    <span className="bar-expand autocad fonts revealOnScroll animated fadeInLeft" data-animation="fadeInLeft" data-timeout="500">AutoCAD</span>
                  </li>
                  <li>
                    <span className="bar-expand printing fonts revealOnScroll" data-animation="fadeInLeft" data-timeout="500">3D printing</span>
                  </li>
                  <li>
                    <span className="bar-expand cnc fonts revealOnScroll" data-animation="fadeInLeft" data-timeout="500">Computer Numerical Control</span>
                  </li>
                  <li>
                    <span className="bar-expand solidworks fonts revealOnScroll" data-animation="fadeInLeft" data-timeout="500">Flow Path / Flow Cut</span>
                  </li>
                </ul>
              </div>
              <br />
            </div>

            <div className=" flipInY">
              <h2>Technologies</h2>
            </div>


            <div className="col-md-6">

              <div className="bars">
                <ul className="skills" style={{ background: this.mainColor }}>
                  <li>
                    <span className="bar-expand arduino fonts revealOnScroll" data-animation="fadeInLeft" data-timeout="500">Arduino</span>
                  </li>
                  <li>
                    <span className="bar-expand bootstrap fonts revealOnScroll" data-animation="fadeInLeft" data-timeout="500">Twitter Bootstrap</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bars">
                <ul className="skills" style={{ background: this.mainColor }}>
                  <li>
                    <span className="bar-expand android fonts revealOnScroll" data-animation="fadeInLeft" data-timeout="500">Android SDK</span>
                  </li>
                  <li>
                    <span className="bar-expand chrome fonts revealOnScroll" data-animation="fadeInLeft" data-timeout="500">Chrome Extensions</span>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }

  projectsSectionBody() {
    const interestStyle = {
      display: 'inline-block',
      margin: null,
      position: 'relative',
      overflow: 'hidden',
      background: 'white',
      maxWidth: '100%',
    };

    const interestImgStyle = {
      width: 450,
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
      const isHighlighted = this.state.highlightedProjectIndex === projectIndex;
      const isSrcButtonHighlighted = this.state.highlightedProjectSrcButtonIndex === projectIndex;
      const isMediaButtonHighlighted = this.state.highlightedProjectMediaButtonIndex === projectIndex;
      const imgStyle = Object.assign({},
        interestImgStyle,
        isHighlighted ? styles.highlightedProjectImgStyle : styles.normalProjectImgStyle);
      const hasProjectSrcUrl = !!project.srcUrl;
      const hasProjectMediaUrl = !!project.mediaUrl;

      return (
        <div
          className="interest"
          style={interestStyle}
          onTouchStart={this.onMouseOverProject.bind(this, projectIndex)}
          onMouseOver={this.onMouseOverProject.bind(this, projectIndex)}
          onMouseOut={this.onMouseOutProject.bind(this, projectIndex)}
          key={"interest#" + projectIndex}>
          <img
            src={project.img}
            className={css(isHighlighted ? styles.highlightedProjectImgStyle : styles.normalProjectImgStyle)}
            key={"interestimg#" + projectIndex} />
          <div className="interest-info">
            <div
              className={isHighlighted ? css(styles.fadeInDown, styles.projectName) : css(styles.fadeOutUp, styles.projectName)}
              key={"interestname#" + projectIndex}>
              {project.name}
            </div>
            <div
              className={isHighlighted ? css(styles.fadeInUp, styles.projectText) : css(styles.fadeOutDown, styles.projectText)}
              key={"projectText#" + projectIndex} >
              {project.text}
            </div>
            <div className={isHighlighted ? css(styles.fadeInUp) : css(styles.fadeOutDown)}>
              {hasProjectSrcUrl ?
                <a
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
                    href={project.mediaUrl}
                    className="btn btn-primary"
                    onMouseOver={this.onMouseOverProjectMediaButton.bind(this, projectIndex)}
                    onMouseOut={this.onMouseOutProjectMediaButton.bind(this, projectIndex)}
                    style={Object.assign({}, hasProjectMediaUrl ? {left: '3%'} : {}, isMediaButtonHighlighted ? highlightedProjectButtonStyle : normalProjectButtonStyle)} >
                    <i className={project.mediaIcon}></i>    {project.mediaIcon === "fa fa-youtube-play" ? "Watch Demo" : "Try It Out"}
                  </a> :
                  null
              }
            </div>
          </div>
        </div>
      );
    });

    return (
      <div id="interests-pictures" style={{ opacity: 1, top: 0 }}>
        {sectionBody}
      </div>
    );
  }

  contactSectionBody() {
    return (
      <div className="container" style={{marginTop: 20}}>
        <div className="social">
					<div className="col-sm-3 col-xs-6">
						<a href="mailto:sagargarg@gmail.com" className="icon trigger">
							<span className="trigger_span">
								<i className="fa fa-envelope-o email1"></i>
								<i className="fa fa-envelope-o email2"></i>
							</span>
						</a>
						<div className="ch-info">
							<h3>Email</h3>
						</div>
						<br />
						<br />
					</div>
					<div className="col-sm-3 col-xs-6">
						<a href="https://www.linkedin.com/in/sagargarg1" target="_blank" className="icon trigger">
							<span className="trigger_span">
								<i className="fa fa-linkedin linkedin1"></i>
								<i className="fa fa-linkedin linkedin2"></i>
							</span>
						</a>
						<div className="ch-info">
							<h3>LinkedIn</h3>
						</div>
						<br />
						<br />

					</div>
					<div className="col-sm-3 col-xs-6">
						<a href="https://github.com/sagargarg" target="_blank" className="icon trigger">
							<span className="trigger_span">
								<i className="fa fa-github github1"></i>
								<i className="fa fa-github github2"></i>
							</span>
						</a>
						<div className="ch-info">
							<h3>Github</h3>
						</div>
						<br />
						<br />
					</div>	
					<div className="col-sm-3 col-xs-6">
						<a href="https://plus.google.com/+SagarGarg1/posts" target="_blank" className="icon trigger">
							<span className="trigger_span">
								<i className="fa fa-youtube youtube1"></i>
								<i className="fa fa-youtube youtube2"></i>
							</span>
						</a>
						<div className="ch-info">
							<h3>YouTube</h3>
						</div>
						<br />
						<br />
					</div>
				</div>
        <div id="contact-text" style={{margin: '2em 5em', textAlign: 'center'}}>
          <p style={{fontSize: 18}}>
            I am very interested in software engineering internship opportunities for next summer. Reach out to me on one of the various networks, or through my email. Otherwise, here's my resume.
          </p>
          <br />
          <a
            href="#resume"
            className="btn btn-primary btn-resume" >
            <i className="fa fa-file-pdf-o"></i>   See My Resume
          </a>
        </div>
      </div>
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
          sectionBody={this.aboutMeSectionBody()} />
        <Section
          title="Work Experience"
          subtitle="Things I have done"
          backgroundColor={this.subColor}
          sectionBody={this.workExperienceSectionBody()} />
        <Section
          title="Skills"
          subtitle="I work with many programming languages and frameworks, including:"
          backgroundColor={this.mainColor}
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
          sectionBody={this.contactSectionBody()} />
      </div>
    );
  }
}

export default App;
