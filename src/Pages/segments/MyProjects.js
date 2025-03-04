// export default function Projects() {
//   // return (
//   //   <section id="my-projects" className="" /*ADD CSS */>
//   //     <h4 className="" /*ADD CSS */>My Projects</h4>
//   //     <div className="" /*ADD CSS */>
//   //       <div
//   //         className="pokemon"
//   //         img="assets/Pokedex-Application.png"
//   //         src="Pokedex Application"
//   //         /*ADD CSS */
//   //         a
//   //         href="" /*PROJECT LINKS */
//   //       >
//   //         NAME OF PROJECT
//   //       </div>
//   //     </div>
//   //   </section>
//   // );
// }

import React from "react";
import { Card, Container, Header, Icon, Image } from "semantic-ui-react";
import PokedexImage from "../media/Pokedex-Application.png";
import MTGImage from "../media/MTG-Life-Counter-Screenshot.png";
import YuGiOhImage from "../media/YuGiOh-Life-Counter.png";
import AnimeVerseImage from "../media/AnimeVerse.png";

const projects = [
  {
    title: "Pokédex Catalog",
    description:
      "A Pokémon based application that provides a catalog for every single pokemon.",
    imageUrl: PokedexImage,
    githubUrl: "https://github.com/TreMitchell/Project1_Pokedex",
  },
  {
    title: "Magic the Gathering Life Counter",
    description:
      "A Swift built Magic the Gathering-themed life point counter that keeps track of the health of two players, the user's health and the enemy's health.",
    imageUrl: MTGImage,
    githubUrl: "https://github.com/TreMitchell/MagicLifeCounter",
  },
  {
    title: "YuGiOh Life Counter",
    description:
      "A Swift built YuGiOh themed life point counter that keeps track of the health of two players, the user's health and the enemy's health.",
    imageUrl: YuGiOhImage,
    githubUrl: "https://github.com/TreMitchell/YuGiOh_LP",
  },
  {
    title: "AnimeVerse",
    description:
      "An anime collection that allows users to view their favorite anime shows and movies using TypeScript, React, Node.js, and the Jikan v4 Anime API.",
    imageUrl: AnimeVerseImage,
    githubUrl: "https://github.com/TreMitchell/Animeverse",
  },
];

const Projects = () => {
  return (
    <Container
      style={{
        marginTop: "2em",
        top: "20px",
        position: "absolute",
        left: "120%",
      }}
    >
      <Header as="h1" style={{ textAlign: "center", color: "white" }}>
        My Projects
      </Header>
      <Card.Group itemsPerRow={4}>
        {projects.map((project, index) => (
          <Card key={index} style={{ display: "block" }}>
            <Image src={project.imageUrl} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{project.title}</Card.Header>
              <Card.Description>{project.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" />
                Github
              </a>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
};

export default Projects;
