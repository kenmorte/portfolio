import React, { Component } from 'react';
import Typist from 'react-typist';
import { Parallax } from 'react-parallax';
import SanJose from '../img/San-Jose.jpg';
import '../css/style.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleTypingDone = this.handleTypingDone.bind(this);

        this.state = {
            subtitleIndex: 0,
            typist: <Typist className="header-subtitle" key={0} onTypingDone={this.handleTypingDone}>{this.props.subtitles[0]}</Typist>
        };
    }

    handleTypingDone() {
        const delay = setTimeout(() => { 
            this.setState((prevState) => {
                let index = null;

                if (prevState.subtitleIndex === this.props.subtitles.length-1) {
                    index = 0;
                } else {
                    index = prevState.subtitleIndex + 1;
                }

                return {
                    subtitleIndex: index,
                    typist: <Typist className="header-subtitle" key={index} onTypingDone={this.handleTypingDone}>{this.props.subtitles[index]}</Typist>
                }
            });

            clearTimeout(delay);
         }, 2000);
    }

    render() {
        return (
            <Parallax bgImage={SanJose} strength={400}>
                <div className="header-content-area">
                    <div className="header-main-title">{this.props.mainTitle}</div>
                    {this.state.typist}
                </div>
            </Parallax>
        );
    }
}

export default Header;