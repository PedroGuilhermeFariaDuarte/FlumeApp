import styled from "styled-components";

export const NavNormal = styled.nav`
  min-width: 15%;
  height: 100%;
  /* border: 1px solid red; */
  background-color: #ffff;
  padding: 1.25rem 0 0 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  #navContainer {
    width: 100%;
    height: 100%;
    overflow-y: auto;
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
    margin-bottom: 0.625rem;
    height: auto;
  }

  .subUls li {
    height: 20px;
    padding: 5px;
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
