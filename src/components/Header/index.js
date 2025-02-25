import React, { Component } from 'react';
import styled from 'styled-components';
import MainText from './MainText';
import AngleDown from './AngleDown';

const Outer = styled.div`
  height: 100vh;
  min-height: 400px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  background-color: #050e1a;
`;

const IconsWrapper = styled.div`
  height: 100%;
  min-height: 400px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      left: '0',
      top: '0',
    };
    this.outerHovered = this.outerHovered.bind(this);
  }
  outerHovered(e) {
    this.setState({ left: `${e.pageX / 100}px`, top: `${e.pageY / 100}px` });
  }
  render() {
    return (
      <Outer id="home" onMouseMove={this.outerHovered}>
        <MainText left={this.state.left} top={this.state.top} />
        <IconsWrapper>
          {/* <SocialMediaLinks /> */}
          <AngleDown />
        </IconsWrapper>
      </Outer>
    );
  }
}

export default Header;