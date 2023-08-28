import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/playerNetworks.css"; // Импорт файла стилей

const App = () => {
  return (
    <div>
      {/* Контейнер для иконок */}
      <div className="icon-container">
        {/* Ссылка на ваш GitHub профиль */}
        <a href="ссылка на GitHub профиль">
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>

        {/* Ссылка на ваш LinkedIn профиль */}
        <a href="ссылка на LinkedIn профиль">
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
      </div>

      {/* Остальной контент вашего сайта */}
    </div>
  );
};

export default App;
