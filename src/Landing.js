import React, { Component } from "react";
import logo from "./logo.svg";
import logoImage from "./img/logo-white.png";
import styled, {
  keyframes,
  createGlobalStyle,
  ThemeProvider
} from "styled-components";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { CSSTransition } from "react-transition-group";
import { Box, Card, Image, Heading, Text, Flex } from "rebass";
import { Block, Row, Inline, Col } from "jsxstyle";
import { GlobalStyle, theme1, theme2, Button } from "./theme/globalStyle";
import ThemeSelect from "./ThemeSelect";

const AppWrapper = styled.div`
  text-align: center;
`;
const ImageLogo = styled.img`
  height: 350px;
  @media (max-width: 700px) {
    height: 250px;
  }
`;
const AppHeader = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.primary};
  -webkit-transition: background-color 700ms linear;
  -ms-transition: background-color 700ms linear;
  transition: background-color 700ms linear;
`;
const AppTitle = styled.h1`
  font-weight: 900;
  font-size: 50px;
  text-decoration: underline;
  cursor: pointer;
  &:focus {
    cursor: pointer;
  }
  @media (max-width: 700px) {
    /* letter-spacing: 1px; */
  }
  text-align: middle;
  text-transform: uppercase;
  color: ${props => props.theme.light};
`;

class Landing extends Component {
  state = {
    theme: theme1,
    play: false,
    fadeOut: false
  };
  handleThemeChange = e => {
    e.preventDefault();
    let { name } = this.state.theme;
    // if it's "theme1" then select theme2
    this.setState(currState => ({
      theme: currState.theme.name === "theme1" ? theme2 : theme1
    }));
  };
  handleEnter = () => {
    this.setState({ play: false });
    setTimeout(() => this.props.history.push("/page1"), 1200);
  };
  handleHireMe = () => {
    window.location = "https://www.linkedin.com/in/jordan-lee-18018215a/";
  };
  componentWillMount() {
    this.setState({ play: true });
  }
  componentWillUnMount() {
    this.setState({ play: true });
    console.log("Unmounting Landing..");
  }
  componentWillReceiveProps() {
    this.setState({ play: true });
  }
  render() {
    const { play } = this.state;
    return (
      <>
        <ThemeProvider theme={this.state.theme}>
          <Animate
            play={play}
            startStyle={{ opacity: 0 }}
            endStyle={{ opacity: 1 }}
            durationSeconds="1.5"
          >
            <AppWrapper onClick={this.handleThemeChange}>
              <AppHeader>
                <Animate
                  easeType="cubic-bezier(0.165, 0.84, 0.44, 1)"
                  play={play}
                  startStyle={{ opacity: 0, transform: "translateX(-500px)" }}
                  endStyle={{ opacity: 1 }}
                  durationSeconds="0.4"
                >
                  <ImageLogo src={logoImage} />
                </Animate>
                <AppTitle style={{ fontSize: 20, textDecoration: "none" }}>
                  Under Contruction... 👷‍♂️
                </AppTitle>
                <AppTitle>
                  <a onClick={this.handleHireMe}>Hire Me</a>
                </AppTitle>
              </AppHeader>
            </AppWrapper>
          </Animate>
        </ThemeProvider>
      </>
    );
  }
}

export default Landing;
