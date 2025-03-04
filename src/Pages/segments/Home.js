import { Children, Component } from "react";

import { Container, Divider, Grid, Header, Segment } from "semantic-ui-react";

import PropTypes from "prop-types";
import Navbar from "./navbar";
import About from "../segments/about";
import Projects from "./MyProjects";

class Home extends Component {
  toggleFixedMenu = (inView) => this.setState({ fixed: !inView });
  handleSidebarHide = () => this.setState({ sideBarOpened: false });
  handleToggle = () => this.setState({ sideBarOpened: true });
  render() {
    return (
      <Segment
        style={{
          padding: "0em 0em",
          backgroundColor: "#111111",
        }}
        vertical
      >
        <Navbar />
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                <About />
              </Header>
              <Projects />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

Home.propTypes = {
  Children: PropTypes.node,
};
export default Home;
