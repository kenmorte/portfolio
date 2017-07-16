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
              <div className="section-header-title">{this.props.title}</div>
              <div className="section-header-subtitle">{this.props.subtitle}</div>
              {this.props.sectionBody}
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