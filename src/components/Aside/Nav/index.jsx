import React from "react";
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

import { NavNormal } from "./styles";

function Nav() {
  return (
    <NavNormal>
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
    </NavNormal>
  );
}

export default Nav;
