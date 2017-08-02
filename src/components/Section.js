import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

/**************************************************************/
/* ------------------- Section Inline-Styles ---------------- */
/**************************************************************/
const styles = StyleSheet.create({
  sectionHeader: {
    textAlign: 'center',
  },

  sectionHeaderTitle: {
    fontSize: '48px',
    margin: '20px',
    paddingTop: '20px',
  },

  sectionHeaderSubtitle: {
    margin: '20px',
    fontSize: '22px',
    paddingBottom: '20px',
    borderBottom: '1px solid #727878',
    color: '#727878',
  }
});

class Section extends Component {
  constructor(props) {
    super(props);

    this.style = {
      backgroundColor: props.backgroundColor
    };
  }

  render() {
    return (
        <div style={this.style}>
            <div className={css(styles.sectionHeader)}>
              <div className={css(styles.sectionHeaderTitle)} style={{color: this.props.titleColor}}>{this.props.title}</div>
              <div className={css(styles.sectionHeaderSubtitle)} style={{color: this.props.subtitleColor}}>{this.props.subtitle}</div>
              <div style={{color: this.props.titleColor}}>
              {this.props.sectionBody}
              </div>
            </div> 
        </div>
    );
  }
}

Section.defaultProps = {
  title: "Title",
  subtitle: "Subtitle"
};


export default Section;