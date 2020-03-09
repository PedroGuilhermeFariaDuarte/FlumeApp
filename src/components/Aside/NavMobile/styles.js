import styled from "styled-components";

export const Nav = styled.nav`
  width: 30%;
  height: 100%;
  /* border: 1px solid red; */
  background-color: #ffff;
  padding: 20px 0px 0px 20px;
  position: absolute;
  left: -30%;
  transition: all 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;

  #navContainer {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  #hamburger {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 100%;
    margin-left: 15px;
    cursor: pointer;
  }

  #hamburger .bar {
    width: 100%;
    height: 2px;
    background-color: #fff;
    margin-top: 2px;
    cursor: pointer;
  }

  ul {
    width: 100%;
    height: 10%;
    /* border: 1px solid thistle; */

    li {
      width: 100%;
      height: 30px;
      /* border: 1px solid turquoise; */
      padding: 10px;
      font-weight: bold;
      color: #2c314a;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-right: 10px;
      }
    }
  }

  ul + ul {
    margin-bottom: 20px;
  }

  .subUls {
    margin-bottom: 10px;
    height: auto;
  }

  .subUls li {
    height: 20px;
    padding: 5px;
    padding-left: 10px;
    font-size: 12px;
    color: #d5d5d5;
    margin-top: 10px;

    justify-content: flex-start;
    align-items: flex-start;
  }

  .subUls li + li {
    font-size: 10px;
    font-weight: bold;
    color: #2c314a;
    /* justify-content: center;
    align-items: center; */
  }
`;
