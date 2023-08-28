import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/playerNetworks.css"; // Импорт стилей

const PlayerNetworks = () => {
  return (
    <div className="player-networks">
      <a href="https://github.com/dankramer2222">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/danilaalbutov">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};

export default PlayerNetworks;
