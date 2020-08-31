import React from "react";
import Obfuscate from 'react-obfuscate'
import {
  FaFacebook,
  FaGithub,
  FaGitlab,
  FaAt,
  FaSkype,
  FaLinkedin,
} from "react-icons/fa";
import FaDocker from "../elements/FaDocker";
import FaNpm from "../elements/FaNpm";
import texts from "../store/texts"
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/norbert.dalecker">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/norbert-dalecker-a74b3a91">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <Obfuscate email={texts.mailAdd()}>
        <FaAt />
      </Obfuscate>
    </li>
    <li>
      <a href="skype:norbertdalecker">
        <FaSkype />
      </a>
    </li>
    <li>
      <a href="https://github.com/norbertdalecker">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://hub.docker.com/u/norbertdalecker/">
        <FaDocker />
      </a>
    </li>
    <li>
      <a href="https://gitlab.com/norbertdalecker">
        <FaGitlab />
      </a>
    </li>
    <li>
      <a href="https://www.npmjs.com/~norbertdalecker/">
        <FaNpm />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
