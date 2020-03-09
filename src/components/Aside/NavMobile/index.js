import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompactDisc,
  faMapMarkedAlt,
  faGlobe,
  faHeadphonesAlt,
  faNewspaper,
  faStar,
  faRecordVinyl,
  faFileAudio,
  faListUl,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

import { Nav } from "./styles";

function NavMobile() {
  const [openNav, setOpenNav] = useState(false);

  function handlerNav() {
    if (!openNav) {
      document.querySelector("nav").style.left = "0";
      setOpenNav(true);
    } else {
      document.querySelector("nav").style.left = "-30%";
      setOpenNav(false);
    }
  }

  return (
    <Nav>
      <div id="hamburger" onClick={() => handlerNav()}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul>
        <li>Flumer</li>
      </ul>
      <div id="navContainer">
        <ul className="subUls">
          <li>Browse Music</li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faCompactDisc} /> Descobrir
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            Perto de mim
          </li>
          <li>
            <FontAwesomeIcon icon={faGlobe} />
            Proximas turnês
          </li>
          <li>
            <FontAwesomeIcon icon={faHeadphonesAlt} />
            Tocando Agora
          </li>
          <li>
            <FontAwesomeIcon icon={faNewspaper} />
            Novidades
          </li>
        </ul>
        <ul className="subUls">
          <li>Sua Musica</li>
          <li>
            <FontAwesomeIcon icon={faStar} />
            Favoritos
          </li>
          <li>
            <FontAwesomeIcon icon={faRecordVinyl} />
            Albums
          </li>
          <li>
            <FontAwesomeIcon icon={faFileAudio} />
            Mixers
          </li>
        </ul>
        <ul className="subUls">
          <li>Playlist</li>
          <li>
            <FontAwesomeIcon icon={faListUl} />
            Eletrcx
          </li>
          <li>
            <FontAwesomeIcon icon={faPlusCircle} />
            Criar nova playlist
          </li>
        </ul>
      </div>
    </Nav>
  );
}

export default NavMobile;
