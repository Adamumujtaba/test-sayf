import { styled } from "styled-components";

export const CommitteeCon = styled.div`
  /* background: red; */
  width: 90%;
  margin: auto;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;
  }
  .add {
    margin: 5px;
    padding: 5px;
    width: 60px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    box-shadow: 2px 2px 3px 3px #ccc;
    /* background: #000; */
    background: #03203c;

    border: none;
    color: #fff;
    cursor: pointer;
  }
  .financial {
    /* background: red; */
    margin: 50px 0px;
  }
  .financial h3 {
    margin: 20px 0px;
    border-bottom: 1px solid #03203c;
  }

  .education {
    /* background: red; */
    margin: 50px 0px;
  }
  .education h3 {
    border-bottom: 1px solid #03203c;
    margin: 20px 0px;
  }

  .members {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  .members-header {
    /* background: red; */
    text-align: center;
    padding: 10px;
    margin: 40px 0px;
    border-bottom: 1px solid #ccc;
  }
  .members a {
    text-decoration: none;
  }

  .card {
    width: 280px;
    height: 400px;
    padding: 5px;
    border: 1px solid #ccc;
    margin: 5px;
    border-radius: 5px;
    position: relative;
  }
  .card:hover {
    box-shadow: 0px 3px 3px 3px #ccc;
  }
  .card div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .card .card-info {
    /* background: black; */
    background: #03203c;

    color: #fff;
    height: 20%;
    text-align: center;
  }
  .card .card-img {
    height: 80%;
  }
  .card .btn {
    display: flex;
    position: absolute;
    top: 0;
    width: 15%;
  }
  .card button {
    margin: 5px;
    padding: 5px;
    width: 60px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    box-shadow: 2px 2px 3px 3px #ccc;
  }
  .card button:nth-child(2) {
    background: red;
    border: none;
    color: #fff;
  }
  .card button:nth-child(3) {
    background: rgb(97, 119, 65);
    border: none;
    color: #fff;
  }
`;
