import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

function Projects() {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      github: "https://github.com/Gauravshukla82/ambiguous-oven-8467",
      deployed: "https://savariapp.netlify.app/",
    },
    {
      id: 2,
      src: reactParallax,
      github: "https://github.com/Gauravshukla82/ambiguous-oven-8467",
      deployed: "https://savariapp.netlify.app/",
    },
    {
      id: 3,
      src: navbar,
      github: "https://github.com/Gauravshukla82/ambiguous-oven-8467",
      deployed: "https://savariapp.netlify.app/",
    },
    {
      id: 4,
      src: reactSmooth,
      github: "https://github.com/Gauravshukla82/ambiguous-oven-8467",
      deployed: "https://savariapp.netlify.app/",
    },
    {
      id: 5,
      src: installNode,
      github: "https://github.com/Gauravshukla82/ambiguous-oven-8467",
      deployed: "https://savariapp.netlify.app/",
    },
    {
      id: 6,
      src: reactWeather,
      github: "https://github.com/Gauravshukla82/ambiguous-oven-8467",
      deployed: "https://savariapp.netlify.app/",
    },
  ];

  return (
    // <section id="projects">
    //   <div className="container">
    //     <h2>Projects</h2>
    //     <div className="project-card">
    //       <img src="project-img-1.jpg" alt="Project Image" />
    //       <h3 className="project-title">Project 1</h3>
    //       <p className="project-description">Project 1 description</p>
    //       <p className="project-tech-stack">Tech stack used: HTML, CSS, JavaScript</p>
    //       <a href="https://github.com/project1" target="_blank" className="project-github-link">GitHub Repository</a>
    //       <a href="https://project1-demo.com" target="_blank" className="project-deployed-link">Demo</a>
    //     </div>
    //     <div className="project-card">
    //       <img src="project-img-2.jpg" alt="Project Image" />
    //       <h3 className="project-title">Project 2</h3>
    //       <p className="project-description">Project 2 description</p>
    //       <p className="project-tech-stack">Tech stack used: React, Node.js</p>
    //       <a href="https://github.com/project2" target="_blank" className="project-github-link">GitHub Repository</a>
    //       <a href="https://project2-demo.com" target="_blank" className="project-deployed-link">Demo</a>
    //     </div>
    //   </div>
    // </section>

    <div
      name="projects"
      id="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, deployed, github }) => (
            <div
              key={id}
              className=" shadow-md shadow-gray-600 rounded-lg project-card"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={deployed} className="project-deployed-link" target="_blank">
                    Demo
                  </a>
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  <a href={github} className="project-github-link" target="_blank">
                    Code
                  </a>
                </button>
              </div>
              <h6 className="project-title">title</h6>
              <p className="project-description">desc</p>
              <div className="project-tech-stack">tech stack</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
