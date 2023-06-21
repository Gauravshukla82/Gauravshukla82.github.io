import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import image from "../assets/image.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      id="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            molestias nemo nihil vel, ducimus nesciunt deleniti ut quia voluptas
            temporibus, asperiores expedita. Voluptate quibusdam aliquam
            deserunt cupiditate vitae amet eos?
          </p>
          <div className="flex">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center mr-40 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={image}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full home-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
