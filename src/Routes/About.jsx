import React from "react";

function About() {
  return (
    // <section id="about" className="about section">
    //   <div className="container">
    //     <h2>About Me</h2>
    //     <h3 id="user-detail-name">Gaurav Shukla</h3>
    //     <p id="user-detail-intro">Formal introduction goes here</p>
    //   </div>
    // </section>

    <div
      name="about"
      id="about" 
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white about section"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            id="user-detail-name"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20" id="user-detail-intro" >
          Greetings! I'm Gaurav Shukla, a full stack web developer based in
          India. I have embarked on an exciting journey to pursue my passion for
          web development.
        </p>

        <br />

        <p className="text-xl">
          Alongside my expertise in web technologies, I am eager to expand my
          skill set to include Android and iOS development. When I'm not
          immersed in coding, you'll find me indulging in painting or cooking
          delicious meals. With a focus on continuous learning and a knack for
          crafting exceptional digital experiences, I am dedicated to delivering
          innovative solutions that meet and exceed client expectations. Looking
          forward to collaborating with you and bringing your ideas to life!
        </p>
      </div>
    </div>
  );
}

export default About;
