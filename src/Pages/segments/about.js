import React from "react";
import { Container, Header, Image, Segment } from "semantic-ui-react";
import Projects from "./MyProjects";
import profilePic from "../media/IMG_1570.png";

const About = () => {
  return (
    <Container style={{ marginTop: "1em" }}>
      <Segment
        style={{ backgroundColor: "#111111", color: "white", border: "none" }}
      >
        <Header as="h1" style={{ textAlign: "center", color: "white" }}>
          Henry Mitchell
        </Header>
        <Image src={profilePic} size="small" circular centered />
        <p style={{ fontSize: "1.2em", marginTop: "1em" }}>
          Hi, I'm Henry Mitchell, but I also go by Tré. I have a passion for
          developing ever since I was a child. I have been working in the field
          of web development for and have developed a strong expertise in
          developing websites.
        </p>
        <p style={{ fontSize: "1.2em" }}>
          In my free time, I enjoy bowling, go karting, watching shows and
          playing video games. I'm always looking for new challenges and
          opportunities to grow both personally and professionally.
        </p>
        <p style={{ fontSize: "1.2em" }}>
          Feel free to connect with me on my social media profiles listed below
          and even check out projects that I have been working on.
        </p>
        {/* <p style={{ fontSize: "1.2em" }}>
          {Projects} <a href="/MyProjects.js">Past Projects</a>
        </p> */}

        <Header as="h3" style={{ color: "white" }}>
          Contacts:
        </Header>
        <p style={{ fontSize: "1.2em" }}>
          {" "}
          <a href="mailto:tre.mitchell000@gmail.com">
            tre.mitchell000@gmail.com
          </a>
        </p>
        <p style={{ fontSize: "1.2em" }}>
          {" "}
          <a href="https://www.linkedin.com/in/tre-mitchell/">Linked-In</a>
        </p>
        <p style={{ fontSize: "1.2em" }}>
          {" "}
          <a href="https://github.com/TreMitchell">GitHub</a>
        </p>
      </Segment>
    </Container>
  );
};

export default About;
