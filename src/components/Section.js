import React, { Component } from 'react';
import '../css/style.css';

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
            <div className="section-header">
              <div className="section-header-title" style={{color: this.props.titleColor}}>{this.props.title}</div>
              <div className="section-header-subtitle" style={{color: this.props.subtitleColor}}>{this.props.subtitle}</div>
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