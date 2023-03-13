import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

// Style
import {
  Container,
  AboutLayear,
  CategoryContainer,
  Category,
  AboutTrack,
  TrackLayear,
  Albums,
  ContainerAlbums,
  ContentAlbums
} from "./styles";

// Assets
import Cover from "../../assets/cover/cover4.jpg";
import Flume from "../../assets/cover/flume.jpg";
import LikeWater from "../../assets/cover/likeWaterjpg.jpg";
import Skin from "../../assets/cover/skin.jpg";
import Never from "../../assets/cover/never.jpg";
import Lockjaw from "../../assets/cover/lockjaw.jpg";

function Section({ children }) {
  return (
    <Container>
      <AboutLayear cover={Cover}>
        <CategoryContainer>
          <Category colorFromCover={Cover}>Electronica</Category>
          <Category colorFromCover={Cover}>Future bass</Category>
          <Category colorFromCover={Cover}>Música experimental</Category>
          <Category colorFromCover={Cover}>Hip-hop</Category>
          <Category colorFromCover={Cover}>Música pop</Category>
          <Category colorFromCover={Cover}>Electropop</Category>
        </CategoryContainer>
        <AboutTrack>
          <h1>Harley</h1>
          <p>
            Harley Edward Streten, conhecido profissionalmente como Flume
            <br /> é um produtor musical australiano, programador musical e DJ.
          </p>
          <div id="ActionTrack">
            <button type="button">Play</button>
          </div>
          <div id="ActionArtist">
            <p>VISÃO GERAL</p>
            <p>BIOGRÁFIA</p>
            <p>ARTISTAS SIMILARES</p>
            <p>PLAYLISTS</p>
            <p>COMENTÁRIOS</p>
          </div>
        </AboutTrack>
      </AboutLayear>
      <TrackLayear>
        <h1>Top Tracks</h1>
        <table border="1px">
          <thead>
            <tr>
              <th className="coverTrack"></th>
              <th className="numberTrack">#</th>
              <th>Title</th>
              <th>Album</th>
              <th>Time</th>
              <th>Play</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={Never}  alt="" />
              </td>
              <td>01.</td>
              <td>Never Be Like You </td>
              <td>Never Be Like You </td>
              <td>2:48</td>
              <td>
                <FontAwesomeIcon icon={faPlayCircle} />
              </td>
            </tr>            
            <tr>
              <td>
                <img src={Skin} alt=""/>
              </td>
              <td>02.</td>
              <td>You Know</td>
              <td>Skin </td>
              <td>3:48</td>
              <td>
                <FontAwesomeIcon icon={faPlayCircle} />
              </td>
            </tr>            
            <tr>
              <td>
                <img src={Lockjaw} />
              </td>
              <td>03.</td>
              <td>Drop The Game</td>
              <td>Lockjaw</td>
              <td>3:32</td>
              <td>
                <FontAwesomeIcon icon={faPlayCircle} />
              </td>
            </tr>            
            <tr>
              <td>
                <img src={Flume} alt=""/>
              </td>
              <td>04.</td>
              <td>What You Need</td>
              <td>Flume</td>
              <td>3:24</td>
              <td>
                <FontAwesomeIcon icon={faPlayCircle} />
              </td>
            </tr>          
            <tr>
              <td>
                <img src={Flume} alt=""/>
              </td>
              <td>05.</td>
              <td>Slepless</td>
              <td>Flume</td>
              <td>3:29</td>
              <td>
                <FontAwesomeIcon icon={faPlayCircle} />
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
        <ContainerAlbums>
          <h1>Albums</h1>
          <ContentAlbums>
            <Albums cover={Flume}>
              <div className="AlbumsCover"></div>
              <div className="AlbumsAbout">
                <p>Flume</p>
                <p>2012</p>
              </div>
            </Albums>
            <Albums cover={LikeWater}>
              <div className="AlbumsCover"></div>
              <div className="AlbumsAbout">
                <p>Like Water</p>
                <p>2017</p>
              </div>
            </Albums>
            <Albums cover={Skin}>
              <div className="AlbumsCover"></div>
              <div className="AlbumsAbout">
                <p>Skin: The Remixes</p>
                <p>2017</p>
              </div>
            </Albums>
          </ContentAlbums>
        </ContainerAlbums>
      </TrackLayear>
      
    </Container>
  );
}

export default Section;
