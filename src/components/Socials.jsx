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
        href="https://www.instagram.com/ccc_akgec"
        target="_blank"
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a
        href="https://www.linkedin.com/company/cloud-computing-cell-akgec/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a
        href="mailto:cloudcomputing@akgec.ac.in"
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