import { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

import { InView } from "react-intersection-observer";

import { createMedia } from "@artsy/fresnel";

import { Route } from "react-router-dom";

import PropTypes from "prop-types";
import GithubImage from "../media/Github_icon.png";
import LinkedInImage from "../media/Linked-In_icon.png";

/* ADD PICTURE HERE*/
{
  /* <img src="react/my-portfolio/src/Pages/media/IMG_1570.png"></img>; */
}

const HomepageHeading = ({ mobile }) => (
  <Route Exact Path="/">
    <Container text style={{ margin: "0em 0em 8em 0em" }}>
      <Header
        as="H1"
        content="testing"
        inverted
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: mobile ? "1.5em" : "3em",
        }}
      ></Header>

      <Header
        as="H2"
        content="testing2"
        inverted
        style={{
          fontSize: mobile ? "1.5em" : "1.7em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "1.5em",
        }}
      ></Header>

      <button primary size="huge" href="">
        My Projects
        <icon name="right arrow"></icon>
      </button>
    </Container>
  </Route>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

export default class navbar extends Component {
  state = {};

  toggleFixedMenu = (inView) =>
    this.setState({
      fixed: !inView,
    });

  handleSideBarHide = () =>
    this.setState({
      sideBarOpened: false,
    });

  handleToggle = () =>
    this.setState({
      sideBarOpened: true,
    });

  render() {
    const { sideBarOpened } = this.state;
    const { fixed } = this.state;
    return (
      <MediaContextProvider>
        <Media greaterThan="mobile">
          <InView onChange={this.toggleFixedMenu}>
            <Segment
              inverted
              textAlign="center"
              style={{ padding: "1em 0em" }}
              vertical
            >
              <Menu
                fixed={fixed ? "top" : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size="large"
              >
                <Container>
                  <Menu.Item href="">Home</Menu.Item>
                  <Menu.Item href="/resume.js">Resume</Menu.Item>
                  {/* <Menu.Item href="/about.js">About Me</Menu.Item>
                  <Menu.Item>
                    <Button
                      href="https://www.linkedin.com/in/tre-mitchell/"
                      img
                      // src="../media/Linked-In_icon.png"
                      src={LinkedInImage}
                      inverted={!fixed}
                      primary={fixed}
                      style={{ marginLeft: "0.5em" }}
                    ></Button>
                    <Button
                      href="https://github.com/TreMitchell?tab=repositories"
                      img
                      // src="../media/Github_icon.png"
                      src={GithubImage}
                      inverted={!fixed}
                      primary={fixed}
                      style={{ marginLeft: "0.5em" }}
                    ></Button>
                  </Menu.Item> */}
                </Container>
              </Menu>
            </Segment>
          </InView>
        </Media>
        <Media as={Sidebar.Pushable} at="mobile">
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation="overlay"
              inverted
              onHide={this.handleSideBarHide}
              vertical
              visible={sideBarOpened}
            >
              <Menu.Item as="a" active>
                Home
              </Menu.Item>

              <Menu.Item as="a"> Resume</Menu.Item>

              <Menu.Item as="a"> About Me</Menu.Item>
            </Sidebar>
          </Sidebar.Pushable>
        </Media>
      </MediaContextProvider>
    );
  }
}
