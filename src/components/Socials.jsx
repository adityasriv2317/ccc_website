import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import './style.css'

const Socials = () => {
  return (
    <div className="socials hidden md:flex text-[rgb(150,198,245)] justify-center items-center space-x-6">
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
        href="https://mail.google.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="E-Mail"
      >
        <FontAwesomeIcon icon={faGoogle}/>
      </a>
    </div>
  );
};

export default Socials;