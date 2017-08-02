import React, { Component } from 'react';
import { fadeInLeft } from 'react-animations';
import VisibilitySensor from 'react-visibility-sensor';
import { StyleSheet, css } from 'aphrodite';
import { isMobile } from '../helpers/helpers.js';
import Python from '../img/python.png';
import Java from '../img/java.png';
import Cpp from '../img/cpp.png';
import Js from '../img/js.png';
import Objc from '../img/objc.png';
import Swift from '../img/swift.png';
import ReactPic from '../img/react.png';
import AngularJs from '../img/angularjs.png';
import D3 from '../img/d3.svg';
import Wt from '../img/wt.png';
import Bootstrap from '../img/bootstrap.png';
import MaterialUI from '../img/materialui.svg';
import AndroidIos from '../img/androidios.png';
import HtmlCss from '../img/html-css.png';
import MySql from '../img/mysql.png';
import Ide from '../img/ide.png';
import 'babel-polyfill';
import '../App.css';
import '../css/style.css';


const styles = StyleSheet.create({

    hidden: {
        visibility: 'hidden'
    },

  /**************************************************************/
  /* ------------------------ Bar Styles ---------------------- */
  /**************************************************************/
    barEl: {
        position: 'relative',
        marginBottom: '20px',
        background: '#bdc3c7',
        height: '38px',
        borderRadius: '3px',
        overflow: 'hidden',
    },

    barFill: {
        position: 'absolute',
        left: '0px',
        top: '0px',
        margin: '0px',
        paddingRight: '24px',
        display: 'inline-block',
        height: '100%',
        lineHeight: '42px',
        borderRadius: '3px 0 0 3px',
        background: '#222',
    },

    barFont: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: 'bolder',
        fontFamily: "\"ruda\", 'Open Sans', sans-serif",
        paddingLeft: '20px',
        position: "relative",
    },

    barImg: {
        position: 'relative',
        width: '1em',
        left: '20px',
        bottom: '5px',
    },

    otherTechBarImg: {
        position: 'relative',
        width: '2em',
        left: '20px',
        bottom: '5px',
    },

  /**************************************************************/
  /* ------------------------ Animations ---------------------- */
  /**************************************************************/
    fadeInLeft: {
        animationName: fadeInLeft,
        animationDuration: '2s',
        animationTimingFunction: 'ease',
    }
});

class SkillsSection extends Component {
    constructor(props) {
        super(props);

        this.skills = {
            programmingLanguages: [
                {
                    name: "Python",
                    imgSrc: Python,
                    percent: 0.9
                },
                {
                    name: "Java",
                    imgSrc: Java,
                    percent: 0.9
                },
                {
                    name: "C++",
                    imgSrc: Cpp,
                    percent: 0.9
                },
                {
                    name: "Javascript",
                    imgSrc: Js,
                    percent: 0.9
                },
                {
                    name: "Objective-C",
                    imgSrc: Objc,
                    percent: 0.8
                },
                {
                    name: "Swift",
                    imgSrc: Swift,
                    percent: 0.75
                },
            ],

            frameworksLibraries: [
                {
                    name: "React",
                    imgSrc: ReactPic,
                    percent: 0.9
                },
                {
                    name: "AngularJS",
                    imgSrc: AngularJs,
                    percent: 0.9
                },
                {
                    name: "D3.js",
                    imgSrc: D3,
                    percent: 0.85
                },
                {
                    name: "Wt",
                    imgSrc: Wt,
                    percent: 0.75
                },
                {
                    name: "Bootstrap",
                    imgSrc: Bootstrap,
                    percent: 0.85
                },
                {
                    name: "Material-UI",
                    imgSrc: MaterialUI,
                    percent: 0.85
                },
            ],

            otherTechnologies: [
                {
                    name: "iOS/Android SDK",
                    imgSrc: AndroidIos,
                    percent: 0.85
                },
                {
                    name: "HTML/CSS",
                    imgSrc: HtmlCss,
                    percent: 0.85
                },
                {
                    name: "MySQL",
                    imgSrc: MySql,
                    percent: 0.85
                },
                {
                    name: "Various IDEs",
                    imgSrc: Ide,
                    percent: 0.9
                },
            ]
        }

        this.state = {
            mouseoverProgrammingLangIndex: null,

            // To keep track of the visibly scrolled skill bars
            scrolledProgrammingLangs: new Set(),
            scrolledFrameworkLibs: new Set(),
            scrolledOtherTechs: new Set(),
        };
    }

    getProgrammingLanguages = () => {
        return this.skills.programmingLanguages.sort((a, b) => b.percent - a.percent)
            .map((programmingLanguage, index) => {
                return (
                    <li className={css(styles.barEl)} key={"programmingLanguage" + index}>
                            <VisibilitySensor onChange={
                                (isVisible) => {
                                    if (isVisible)
                                        this.setState(
                                            (prevState) => {
                                                prevState.scrolledProgrammingLangs.add(index);
                                                return prevState;
                                            }
                                        )
                                    }
                                } 
                            />
                            <span 
                                className={css(
                                    styles.barFill, 
                                    styles.barFont, 
                                    this.state.scrolledProgrammingLangs.has(index) ? styles.fadeInLeft : styles.hidden
                                )} 
                                style={{width: (programmingLanguage.percent * 100) + '%'}}
                                onMouseOver={() => this.setState({mouseoverProgrammingLangIndex: index})}
                                onMouseOut={() => this.setState({mouseoverProgrammingLangIndex: null})}
                            >
                                {programmingLanguage.name}
                                <img 
                                    className={css(styles.barImg)}
                                    src={programmingLanguage.imgSrc}
                                    alt={programmingLanguage.name}
                                />
                            </span>
                    </li>
                );
            });
    }

    getFrameworksLibraries = () => {
        return this.skills.frameworksLibraries.sort((a, b) => b.percent - a.percent)
            .map((frameworkLibrary, index) => {
                return (
                    <li className={css(styles.barEl)} key={"frameworkLibrary" + index}>
                            <VisibilitySensor onChange={
                                (isVisible) => {
                                    if (isVisible)
                                        this.setState(
                                            (prevState) => {
                                                prevState.scrolledFrameworkLibs.add(index);
                                                return prevState;
                                            }
                                        )
                                    }
                                } 
                            />
                            <span 
                                className={css(
                                    styles.barFill, 
                                    styles.barFont, 
                                    this.state.scrolledFrameworkLibs.has(index) ? styles.fadeInLeft : styles.hidden
                                )} 
                                style={{width: (frameworkLibrary.percent * 100) + '%'}}
                            >
                                {frameworkLibrary.name}
                                <img 
                                    className={css(styles.barImg)}
                                    src={frameworkLibrary.imgSrc}
                                    alt={frameworkLibrary.name}
                                />
                            </span>
                    </li>
                );  
            });
    }

    getOtherTechnologies = (firstHalfOfList) => {
        const halfIndex = Math.ceil(this.skills.otherTechnologies.length / 2);  
        const techList = firstHalfOfList ? 
            this.skills.otherTechnologies.slice(0, halfIndex)
            : this.skills.otherTechnologies.slice(halfIndex);

        return techList.sort((a, b) => b.percent - a.percent)
            .map((otherTechnology, index) => {
                    return <li className={css(styles.barEl)} key={"othertech" + index}>
                            <VisibilitySensor onChange={
                                (isVisible) => {
                                    if (isVisible)
                                        this.setState(
                                            (prevState) => {
                                                prevState.scrolledOtherTechs.add(index);
                                                return prevState;
                                            }
                                        )
                                    }
                                } 
                            />
                            <span 
                                className={css(
                                    styles.barFill, 
                                    styles.barFont, 
                                    this.state.scrolledOtherTechs.has(index) ? styles.fadeInLeft : styles.hidden
                                )} 
                                style={{width: (otherTechnology.percent * 100) + '%'}}
                            >
                                {otherTechnology.name}
                                <img 
                                    className={css(styles.otherTechBarImg)}
                                    src={otherTechnology.imgSrc}
                                    alt={otherTechnology.name}
                                />
                            </span>
                    </li>
            });
    }

    render() {
        return (
      <div className="skill-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className=" flipInY">
                <h2>Programming Languages</h2>
              </div>
              <div className="bars">
                <ul className="skills" style={{ background: this.props.mainColor, color: this.props.subColor }}>
                  {this.getProgrammingLanguages()}
                </ul>
              </div>
              <br />
            </div>

            <div className="col-md-6">
              <div className=" flipInY">
                <h2>Frameworks and Libraries</h2>
              </div>
              <div className="bars">
                <ul className="skills" style={{ background: this.props.mainColor }}>
                  {this.getFrameworksLibraries()}
                </ul>
              </div>
              <br />
            </div>
            <div className=" flipInY">
              <h2>Other Technologies</h2>
            </div>
            <div className="col-md-6">
              <div className="bars">
                <ul className="skills" style={{ background: this.props.mainColor }}>
                  {this.getOtherTechnologies(true)}
                  {isMobile() ? this.getOtherTechnologies(false) : null}
                </ul>
              </div>
            </div>
            {
                !isMobile() ? 
                    <div className="col-md-6">
                    <div className="bars">
                        <ul className="skills" style={{ background: this.props.mainColor }}>
                        {this.getOtherTechnologies(false)}
                        </ul>
                    </div>
                    </div>
                : null
            }
            <br />
            <br />
          </div>
        </div>
      </div>
        );
    }
}

export default SkillsSection;