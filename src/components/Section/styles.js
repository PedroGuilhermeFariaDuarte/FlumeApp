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
  max-height: 50%;
  /* border: 1px solid thistle; */
  background-image: url(${prop => prop.cover});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px 50px 0px 50px;

  display: flex;
  flex-direction: column;
`;

export const CategoryContainer = styled.div.attrs(props => ({
  id: 'CategoryContainer'
}))`
  width: 100%;
  min-height: 50px;
  height: auto;
  /* border: 1px solid whitesmoke; */

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Category = styled.div`
  min-width: 6.25rem;
  width: auto;
  height: 1.5rem;
  background-color: ${prop => usePalette(prop.colorFromCover).data.darkVibrant + `20`};
  padding: 0.312rem;
  border-radius: 1.875rem;
  margin-left: 0.625rem;

  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export const AboutTrack = styled.div`
  width: 100%;
  height: auto;
  max-height: 50%;
  /* border: 1px solid whitesmoke; */
  padding: 10px;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 5.125rem;
    font-weight: bold;
    color: #fff;
  }

  p {
    font-size: 0.9rem;
    font-weight: bold;
    color: #fff;
    margin-top: 20px;
  }

  #ActionTrack {
    width: 100%;
    height: auto;
    margin-top: 1.875rem;
    /* border: 1px solid thistle; */
    display: flex;
    flex-direction: none;
    justify-content: space-between;

    button {
      width: 100px;
      height: 1.875rem;
      border-radius: 1.875rem;
      cursor: pointer;
      font-weight: bold;
    }
  }

  #ActionArtist {
    width: 100%;
    height: 3.125rem;
    margin-top: 1.875rem;
    /* border: 1px solid peru;     */

    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 1rem;

    p {
      width: auto;
      height: auto;
      border-bottom: 0.125rem solid #fff;
      padding-bottom: 0.187rem;

      text-align: center;
      font-size: 0.75rem;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      
    }

    p + p {
      border-bottom: none;
      margin-left: 1rem;
    }
  }
`;

export const TrackLayear = styled.div.attrs((props) => ({
  id: 'TrackLayear'
}))`
  width: 100%;
  height: 100%;
  /* border: 1px solid tan; */
  padding: 3.75rem 3.125rem 3.125rem 4.062rem;
  
  overflow-y: scroll;
  
  display: flex;
  flex-direction: column;

  h1 {
    user-select: none;

    font-size: 1rem;
    color: #404145;
    cursor: default;
  }

  table {
    width: 100%;
    height: auto;
    border-collapse: collapse;
    margin-top: 3.125rem;
    margin-bottom: 3.125rem;

    tr th {
      text-align: center;
      padding-bottom: 1.25rem;
      font-size: 0.95rem;
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
      width: 1.875rem;
    }

    tr td {
      height: 4.375rem;
      background-color: #fff;
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
      
      margin-top: 0.625rem;

      font-weight: bold;
      font-size: 0.9rem;
      color: #404145;
      text-align: left;

      cursor: pointer;
    }

    tr td + td {
      border-radius: 0px;
    }

    tr td:last-child {
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }

    tr td img {
      max-width: 55%;
      border-radius: 0.312rem;
      margin-left: 0.4375rem;
    }
  }  
`;

export const ContainerAlbums = styled.div.attrs((props) => ({
  id: 'ContainerAlbums'
}))`
  width: 100%;
  height:25rem;      
  /* border: 1px solid slateblue; */

  display: flex;
  flex-direction: column;  
`

export const ContentAlbums = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3.125rem;

  overflow: hidden;
  overflow-x: auto;

  display: flex;
  flex-flow: row nowrap;
`

export const Albums = styled.div`
  min-width: 12.5rem;
  max-width: 12.5rem;
  height: 15.625rem;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #fff;

  margin-left: 1rem;

  display: flex;
  flex-direction: column;

  .AlbumsCover {
    width: 100%;
    height: 80%;
    border-radius: 0.625rem;
    /* border: 1px solid red; */
    background-image: url(${prop => prop.cover});
    background-size: cover;
    background-repeat: no-repeat;

    box-shadow: 0px 5px 0.5em 0.1em ${prop => usePalette(prop.cover).data.darkVibrant + `40`};
  }

  .AlbumsAbout {
    width: 100%;
    flex: 1;
    /* border: 1px solid orange; */
    text-align: center;
    padding: 0.312rem;

    p {
      font-size: 0.8rem;
      font-weight: bold;
    }

    p + p {
      font-size: 0.7rem;
      color: #d5d5d5;
      margin-top: 0.312rem;
    }
  }
`;
