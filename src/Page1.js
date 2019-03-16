import React, { Component } from "react";
import logo from "./logo.svg";
import logoImage from "./img/logo-white.png";
import styled, {
  keyframes,
  createGlobalStyle,
  ThemeProvider
} from "styled-components";
import { Link } from "react-router-dom";
import { Animate, AnimateGroup } from "react-simple-animate";
import { Box, Card, Image, Heading, Text, Flex } from "rebass";
import { Block, Row, Inline, Col } from "jsxstyle";
import { Quote, Background } from "./theme/globalStyle";
import ThemeSelect from "./ThemeSelect";
import table1 from "./img/table1.jpg";

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
  flex-direction: row;
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
  /* letter-spacing: 20px; */
  @media (max-width: 700px) {
    /* letter-spacing: 1px; */
  }
  text-align: middle;
  text-transform: uppercase;
  color: ${props => props.theme.light};
`;

const First = () => (
  <AnimateGroup play={true}>
    {["Born ", "from ", "pallet ", "boards "].map((item, index) => {
      return (
        <Animate
          key={item}
          sequenceIndex={index}
          durationSeconds="0.7"
          endStyle={{ opacity: 1, transform: "translateY(5px)" }}
          startStyle={{ opacity: 0, transform: "translateY(0)" }}
        >
          <Quote>{item}</Quote>
        </Animate>
      );
    })}
  </AnimateGroup>
);

const ImgWrap = styled.div`
  filter: brightness(70%);
  object-fit: cover;
`;

const Img = styled.img`
  filter: brightness(70%);
  object-fit: cover;
  object-position: -20% 0;
  height: 100vh;
`;

const Second = () => (
  <Animate
    key={8}
    sequenceIndex={8}
    durationSeconds="0.7"
    endStyle={{ opacity: 1, transform: "translateY(5px)" }}
    startStyle={{ opacity: 0, transform: "translateY(0)" }}
  >
    <ImgWrap>
      <Img src={table1} />
    </ImgWrap>
  </Animate>
);

class Landing extends Component {
  state = {
    play: false
  };
  componentWillMount() {
    this.setState({ play: true });
  }
  componentWillReceiveProps() {
    this.setState({ play: true });
  }
  render() {
    const { play } = this.state;
    return (
      <AppHeader>
        <AnimateGroup play={true}>
          [<First />]
        </AnimateGroup>
      </AppHeader>
    );
  }
}

// <AppHeader>
// <AnimateGroup play={true}>
// [<First />, <Second />]
// </AnimateGroup>
// </AppHeader>

// return (
//   <AppHeader>
//   <Quote>Born from pallet boards....</Quote>
//   <Link to="/">Home</Link>
//   </AppHeader>
// );
// <AnimateGroup play={true}>
//   {["R", "E", "A", "C", "T"].map((item, index) => {
//     return (
//       <Animate
//         key={item}
//         sequenceIndex={index}
//         endStyle={{ opacity: 0, transform: "translateY(-10px)" }}
//         startStyle={{ opacity: 1, transform: "translateY(0)" }}
//       >
//         <Component />
//       </Animate>
//     );
//   })}
// </AnimateGroup>

export default Landing;
