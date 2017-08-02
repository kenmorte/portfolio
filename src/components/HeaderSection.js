import React, { Component } from 'react';
import Typist from 'react-typist';
import { Parallax } from 'react-parallax';
import { StyleSheet, css } from 'aphrodite';
import Code from '../img/Code.png';

/**************************************************************/
/* ------------------- Header Inline-Styles ----------------- */
/**************************************************************/
const styles = StyleSheet.create({
    headerContentArea: {
        height: '100vh',
        color: 'white',
        zIndex: '3',
        textAlign: 'center',
        fontFamily: "'Open Sans', sans-serif",
    },

    headerMainTitle: {
        position: 'relative',
        top: '25vh',
        fontSize: '72px',
        fontWeight: '300',
        paddingBottom: '20px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.74902)',
        display: 'inline-block',
        margin: '10px 0px',
        overflow: 'hidden',
    },

    headerSubtitle: {
        position: 'relative',
        top: '25vh',
        display: 'block',
        fontSize: '36px',
        fontFamily: 'monospace',
    }
});

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleTypingDone = this.handleTypingDone.bind(this);

        this.state = {
            subtitleIndex: 0,
            typist: <Typist 
                        className={css(styles.headerSubtitle)} 
                        key={0} 
                        onTypingDone={this.handleTypingDone}
                    >
                        {this.props.subtitles[0]}
                    </Typist>
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
                    typist: <Typist 
                                className={css(styles.headerSubtitle)}
                                key={index} 
                                onTypingDone={this.handleTypingDone}
                            >
                                {this.props.subtitles[index]}
                            </Typist>
                }
            });

            clearTimeout(delay);
         }, 2000);
    }

    render() {
        return (
            <Parallax bgImage={Code} bgWidth='auto' bgHeight='auto' strength={400}>
                <div className={css(styles.headerContentArea)}>
                    <div className={css(styles.headerMainTitle)}>{this.props.mainTitle}</div>
                    {this.state.typist}
                </div>
            </Parallax>
        );
    }
}

export default Header;