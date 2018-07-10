import React from "react";
import Mailto from "react-mailto";
import {
  FaFacebook,
  FaGithub,
  FaAt,
  FaSkype,
  FaLinkedin,
  FaPaypal
} from "react-icons/lib/fa";
import FaDocker from "../elements/FaDocker";
import FaNpm from "../elements/FaNpm";
import FaFreelancer from "../elements/FaFreelancer";
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
      <Mailto email={texts.mailAdd()} obfuscate={true}>
        <FaAt />
      </Mailto>
    </li>
    <li>
      <a href="skype:norbertdalecker">
        <FaSkype />
      </a>
    </li>
    <li>
      <a href="https://paypal.me/NorbertDalecker">
        <FaPaypal />
      </a>
    </li>     
    <li>
      <a href="https://www.freelancer.com/u/norbertdalecker">
        <FaFreelancer />
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
      <a href="https://www.npmjs.com/~norbertdalecker/">
        <FaNpm />
      </a>
    </li>            
  </ul>
);

export default SocialLinks;
