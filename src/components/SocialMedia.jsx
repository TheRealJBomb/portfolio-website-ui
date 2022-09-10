import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://linkedin.com/in/jake-greenbaum"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/TheRealJBomb"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
