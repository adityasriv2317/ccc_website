import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import './style.css'

const Socials = () => {
  return (
    <div className="socials mx-7 hidden md:flex text-[rgb(150,198,245)] justify-center items-center space-x-6">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>

      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <FontAwesomeIcon icon={faYoutube}/>
      </a>
    </div>
  );
};

export default Socials;

{
  /* <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          size="2x"
          className="text-blue-600"
        />
      </a>

      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" className="text-blue-400" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          className="text-pink-500"
        />
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          className="text-blue-700"
        />
      </a>

      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <FontAwesomeIcon
          icon={faYoutube}
          size="2x"
          className="text-red-600" //
        />
      </a> */
}
