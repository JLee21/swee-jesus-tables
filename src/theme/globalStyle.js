import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    // @import url("https://fonts.googleapis.com/css?family=Roboto|Notable|Paytone+One")
    font-family: 'Roboto', sans-serif;
    margin: -2px;
  }

  h1 {
    font-family: 'Paytone One', sarif;
  }

  a {
    color: pink;
  }
`;

// Evil
export const theme1 = {
  name: "theme1",
  primary: "#ff0198",
  secondary: "#01c1d6",
  danger: "#eb238e",
  light: "#f4f4f4",
  dark: "#222"
};

// Devine
export const theme2 = {
  name: "theme2",
  primary: "#171917",
  secondary: "#ffb617",
  danger: "#f16623",
  light: "#f4f4f4",
  dark: "#222"
};

export const Button = styled.button`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: transparent;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.primary};
      color: white;
    `};
`;

export const Background = styled.div`
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

export const Quote = styled.div`
  font-size: 4em;
  @media (max-width: 700px) {
    font-size: 3em;
  }
  color: #f2f2f2;
  letter-spacing: 2px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
  /* font-family: "Great Vibes", cursive; */
  font-family: "Tangerine", cursive;
  margin-right: 10px;
`;
