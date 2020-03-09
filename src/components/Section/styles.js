import styled from "styled-components";
import { usePalette } from "react-palette";

export const Container = styled.section`
  min-width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid purple; */
`;

export const AboutLayear = styled.div`
  width: 100%;
  max-height: 700px;
  /* border: 1px solid thistle; */
  background-image: url(${prop => prop.cover});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px 50px 0px 50px;

  display: flex;
  flex-direction: column;
`;

export const CategoryContainer = styled.div`
  width: 100%;
  min-height: 50px;
  height: auto;
  /* border: 1px solid whitesmoke; */

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Category = styled.div`
  min-width: 100px;
  width: auto;
  height: 20px;
  background-color: ${prop =>
    usePalette(prop.colorFromCover).data.darkVibrant + `20`};
  padding: 5px;
  border-radius: 30px;
  font-size: 8px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  margin-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutTrack = styled.div`
  width: 80%;
  height: 250px;
  /* border: 1px solid whitesmoke; */
  padding: 10px;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 50px;
    font-weight: bold;
    color: #fff;
  }

  p {
    font-size: 10px;
    font-weight: bold;
    color: #fff;
    margin-top: 20px;
  }

  #ActionTrack {
    width: 100%;
    height: 30px;
    margin-top: 30px;
    /* border: 1px solid thistle; */
    display: flex;
    justify-content: space-between;

    button {
      width: 100px;
      height: 30px;
      border-radius: 30px;
      cursor: pointer;
      font-weight: bold;
    }
  }

  #ActionArtist {
    width: 100%;
    height: 50px;
    margin-top: 30px;
    /* border: 1px solid peru; */
    display: flex;
    align-items: center;

    p {
      width: 100px;
      height: auto;
      font-size: 9px;
      font-weight: bold;
      color: #fff;
      text-align: center;
      padding-bottom: 3px;
      cursor: pointer;
      border-bottom: 2px solid #fff;
    }

    p + p {
      border-bottom: none;
    }
  }
`;

export const TrackLayear = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid tan; */
  overflow-y: scroll;
  padding: 60px 50px 50px 65px;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 15px;
    color: #404145;
    cursor: default;
    user-select: none;
  }

  table {
    width: 100%;
    height: auto;
    border-collapse: collapse;
    margin-top: 50px;
    margin-bottom: 50px;

    tr th {
      text-align: center;
      padding-bottom: 20px;
      font-size: 12px;
      color: #d5d5d5;
    }

    tr th + th {
      text-align: left;
    }

    tr th.numberTrack {
      text-align: center;
    }

    tr th.coverTrack,
    tr th.numberTrack {
      width: 30px;
    }

    tr td {
      height: 70px;
      margin-top: 10px;
      background-color: #fff;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      font-weight: bold;
      font-size: 11px;
      color: #404145;
      text-align: left;
      cursor: pointer;
    }

    tr td + td {
      border-radius: 0px;
    }

    tr td:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    tr td img {
      max-width: 55%;
      border-radius: 5px;
      margin-left: 7px;
    }
  }

  .ContainerAlbums {
    width: 100%;
    height: auto;
    margin-top: 50px;

    /* border: 1px solid slateblue; */

    display: flex;
    flex-direction: row;
  }
`;

export const Albums = styled.div`
  width: 200px;
  height: 250px;
  border-radius: 15px;
  background-color: #fff;
  margin-left: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;

  .AlbumsCover {
    width: 100%;
    height: 80%;
    border-radius: 10px;
    /* border: 1px solid red; */
    background-image: url(${prop => prop.cover});
    background-size: cover;
    background-repeat: no-repeat;

    box-shadow: 0px 5px 0.5em 0.1em
      ${prop => usePalette(prop.cover).data.darkVibrant + `40`};
  }

  .AlbumsAbout {
    width: 100%;
    flex: 1;
    /* border: 1px solid orange; */
    text-align: center;
    padding: 5px;

    p {
      font-size: 12px;
      font-weight: bold;
    }

    p + p {
      font-size: 9px;
      color: #d5d5d5;
      margin-top: 5px;
    }
  }
`;
