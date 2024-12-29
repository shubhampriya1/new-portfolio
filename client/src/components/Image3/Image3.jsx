import "./Image3Style.css";
import { Link } from "react-router-dom";

const Image2 = () => {
  return (
    <div className="Shubham">
      <div className="mask">
        <img
          alt="into-img"
          className="into-img"
          src="https://images.unsplash.com/photo-1475257026007-0753d5429e10?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="content">
        <h1>Introduction</h1>

        <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Hello,I am Shubham priya a 4th year B-tech Student,passionate MERN
          Stack Developer with a strong background in web development. I
          specialize in building dynamic, user-friendly applications using
          MongoDB, Express.js, React, and Node.js. When I'm not coding, I enjoy
          exploring the latest tech trends, contributing to open-source
          projects, and participating in hackathons. Let's connect and discuss
          how we can collaborate to bring innovative ideas to life!
        </p>
        <div className="pt-6  ">
          <Link
            to="https://drive.google.com/file/d/1hjWNF-B9MJxAAV2fxGlQarXBEwR-1LRb/view?usp=sharing"
            className="btn"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Image2;
