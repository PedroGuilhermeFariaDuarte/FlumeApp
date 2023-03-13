import styled from "styled-components";

export const Nav = styled.nav`
  width: 50%;
  height: 100%;
  /* border: 1px solid red; */
  background-color: #ffff;
  padding: 1.25rem 0px 0px 1.25rem;
  position: absolute;
  left: -50%;
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
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    left: 100%;
    margin-left: 0.9375rem;
    cursor: pointer;
  }

  #hamburger .bar {
    width: 100%;
    height: 0.125rem;
    background-color: #fff;
    margin-top: 0.125rem;
    cursor: pointer;
  }

  ul {
    width: 100%;
    height: 10%;
    /* border: 1px solid thistle; */

    li {
      width: 100%;
      height: 1.875rem;
      /* border: 1px solid turquoise; */
      padding: 0.625rem;
      font-weight: bold;
      color: #2c314a;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-right: 0.625rem;
      }
    }
  }

  ul + ul {
    margin-bottom: 1.25rem;
  }

  .subUls {
    margin-bottom: 1.25rem;
    height: auto;
  }

  .subUls li {
    height: 1.25rem;
    padding: 0.312rem;
    padding-left: 0.625rem;
    font-size: 0.9rem;
    color: #d5d5d5;
    margin-top: 0.625rem;

    justify-content: flex-start;
    align-items: flex-start;
  }

  .subUls li + li {
    font-size: 0.8rem;
    font-weight: bold;
    color: #2c314a;
    /* justify-content: center;
    align-items: center; */
  }
`;
