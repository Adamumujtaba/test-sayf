import styled from "styled-components";

export const StdContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  .add {
    margin: 5px;
    padding: 5px;
    width: 60px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    box-shadow: 2px 2px 3px 3px #ccc;
    background: #000;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  .student-header {
    /* background: red; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .student-header button {
    margin-right: 20px;
  }

  .styled-table {
    border-collapse: collapse;
    /* margin: 5px 0px; */
    font-size: 0.85em;
    width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  .styled-table thead tr {
    background: #ccc;
    color: #000;
    text-align: left;
  }
  .styled-table th,
  .styled-table td {
    padding: 12px 15px;
  }
  .styled-table tbody tr {
    border-bottom: 1px solid #ccc;
  }

  .styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  .styled-table tbody tr:last-of-type {
    border-bottom: 2px solid#ccc;
  }

  @media screen and (max-width: 768px) {
    .styled-table {
      font-size: x-small;
    }
    .styled-table {
      width: 80%;
      margin: auto;
    }
  }
`;
