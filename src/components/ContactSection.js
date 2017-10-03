import React, { Component } from 'react';
import Scroll from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor';
import { StyleSheet, css } from 'aphrodite';
import 'babel-polyfill';
import '../css/contact.css';

class ContactSection extends Component {
    constructor(props) {
        super(props);

        this.contactInfo = [
            {
                name: "Email",
                link: "mailto:kenmorte@gmail.com",
                iconNormal: "fa fa-envelope-o email-normal",
                iconHighlighted: "fa fa-envelope-o email-highlighted"

            },
            {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/christianmorte/",
                iconNormal: "fa fa-linkedin linkedin-normal",
                iconHighlighted: "fa fa-linkedin linkedin-highlighted"

            },
            {
                name: "GitHub",
                link: "https://github.com/kenmorte",
                iconNormal: "fa fa-github github-normal",
                iconHighlighted: "fa fa-github github-highlighted"

            },
            {
                name: "YouTube",
                link: "https://www.youtube.com/channel/UC-WhcHnQea1WC6BLIBODCXQ",
                iconNormal: "fa fa-youtube youtube-normal",
                iconHighlighted: "fa fa-youtube youtube-highlighted"

            },
        ];

        this.state = {
        };
    }

    getContactList = () => {
        return this.contactInfo.map((info) => {
            return (
                <div 
                    className={"col-sm-" + (12 / this.contactInfo.length) + " " + "col-xs-" + (24 / this.contactInfo.length)}
                    key={info.name}
                >
                    <a 
                        target="_blank"
                        href={info.link}
                        className="icon trigger"
                    >
                        <span className="contact_span">
                            <i className={info.iconNormal}></i>
                            <i className={info.iconHighlighted}></i>
                        </span>
                    </a>
                    <div className="ch-info">
                        <h3>{info.name}</h3>
                    </div>
                    <br />
                    <br />
                </div>
            );
        });
    }

    render() {
        return (
            <div className="container" style={{marginTop: 20}}>
                <div>
                    {this.getContactList()}
                </div>
                <div id="contact-text" style={{margin: '2em 7%', textAlign: 'center'}}>
                <p style={{fontSize: 18, color: this.subColor}}>
                    I am very interested to work with all sorts of projects. Reach out to me on one of the various networks, or through my email. Otherwise, here's my resume.
                </p>
                <br />
                <a
                    target="_blank"
                    href="https://docs.google.com/document/d/1zq0KwxEtGHK1E1OGywX6gfQsZb6bW-4k3mj8EXAKGd0/edit?usp=sharing"
                    className="btn btn-primary btn-resume" >
                    <i className="fa fa-file-pdf-o"></i>   View My Resume
                </a>
                </div>
            </div>
        );
    }
}

export default ContactSection;