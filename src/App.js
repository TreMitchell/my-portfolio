// import logo from "./logo.svg";
// import "./App.css";
import "semantic-ui-css/semantic.min.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/segments/Home";
import navbar from "../src/Pages/segments/navbar";
import About from "../src/Pages/segments/about";
import myprojects from "../src/Pages/segments/MyProjects";
import resume from "../src/Pages/segments/resume";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

export default function RoutingThing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/navbar" Component={navbar} />
        <Route path="/aboutme" Component={About} />
        <Route path="/myprojects" Component={myprojects} />
        <Route path="/resume" Component={resume} />
      </Routes>
    </BrowserRouter>
  );
}
