import styled from "styled-components";

export const Nav = styled.nav`
  /* background: #45137f; */
  background: #03203c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 40px;
  width: 100%;
  margin-bottom: 10px;
  color: #fff;
  height: 40px;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  box-shadow: 1px 1px 2px 3px rgba(120, 120, 120, 0.466);
  z-index: 9999;

  /* overflow-x: hidden; */

  .navIcon {
    display: flex;
    align-items: center;
    /* width: 3%; */
    justify-content: space-between;
  }
  .navIcon a {
    text-decoration: none;
    color: #fff;
  }
  .navToggle {
    display: none;
  }

  ul {
    list-style: none;
    display: flex;
    margin-right: 30px;
  }
  ul li {
    margin: 0px 5px;
  }
  ul li a {
    text-decoration: none;
    color: #fff;
  }

  @media screen and (max-width: 670px) {
    /* background:darkblue ; */
    ul {
      flex-direction: column;
      background: #03203c;
      /* background: #45137f; */
      z-index: 99;
      position: absolute;
      right: 0;
      top: 60px;
      left: 0;
      height: 50vh;
    }
    ul li {
      text-align: center;
      margin: 10px;
    }
    ul li a {
      display: block;
      padding: 10px;
    }
    ul li a:hover {
      /* background: #aaa; */
      transition: 0.4s;
      color: darkblue;
      transform: scale(1.4);
    }
    .navToggle {
      display: block;
      /* background: red; */
      position: absolute;
      right: 40px;
    }
    .navLinksOpen {
      width: 100%;
      transition: 0.4s;
    }
    .navLinksClose {
      right: 0;
      opacity: 0;
      display: none;
      transition: 0.4s;
    }
  }
`;
