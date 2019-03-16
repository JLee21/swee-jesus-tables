import React, { Component } from "react";
import logo from "./logo.svg";
import logoImage from "./img/logo-white.png";
import styled, {
  keyframes,
  createGlobalStyle,
  ThemeProvider
} from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { Animate } from "react-simple-animate";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Box, Card, Image, Heading, Text, Flex } from "rebass";
import { Block, Row, Inline, Col } from "jsxstyle";
import { GlobalStyle, theme1, theme2, Button } from "./theme/globalStyle";
import "./App.css";
import Landing from "./Landing";
import Page1 from "./Page1";
import Page2 from "./Page2";
import TransGroup from "./TransGroup";

const history = createHistory();
class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme2}>
          <Router history={history}>
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={2000}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Landing} />
                      <Route exact path="/page1" component={Page1} />
                      <Route path="/hsl" component={Page2} />
                      <Route path="/transgroup" component={TransGroup} />
                      <Route
                        path="/hireme"
                        component={() => {
                          window.location =
                            "https://www.linkedin.com/in/jordan-lee-18018215a/";
                          return null;
                        }}
                      />

                      <Redirect to="/hsl/10/90/50" />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </Router>
        </ThemeProvider>
      </>
    );
  }
}

export default App;

// return (
//   <>
//     <GlobalStyle />
//     <Router>
//       <Route
//         render={({ location }) => (
//           <div>
//             <Route
//               exact
//               path="/"
//               render={() => <Redirect to="/hsl/10/90/50" />}
//             />
//
//             <Link to="/page1">page1</Link>
//             <Link to="/page2">page2</Link>
//
//             <div>
//               <TransitionGroup>
//                 <CSSTransition
//                   key={location.key}
//                   classNames="fade"
//                   timeout={1000}
//                 >
//                   <Switch location={location}>
//                     <Route exact path="/page1" component={Page1} />
//                     <Route exact path="/page2" component={Page2} />
//                     <Route render={() => <div>Not Found</div>} />
//                   </Switch>
//                 </CSSTransition>
//               </TransitionGroup>
//             </div>
//           </div>
//         )}
//       />
//     </Router>
//   </>
// );

// return (
//   <>
//     <GlobalStyle />
//     <BrowserRouter>
//       <TransitionGroup>
//         <CSSTransition classNames="fade" timeout={300}>
//           <Switch location={location}>
//             <Route exact path="/" component={Landing} />
//             <Route exact path="/page1" component={Page1} />
//             <Route path="/hsl" component={Page2} />
//             <Route path="/transgroup" component={TransGroup} />
//             <Redirect to="/hsl/10/90/50" />
//           </Switch>
//         </CSSTransition>
//       </TransitionGroup>
//     </BrowserRouter>
//   </>
// );
