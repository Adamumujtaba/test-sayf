import { styled } from "styled-components";

function Footer() {
  return (
    <FooterCont>
      <div className="about">
        <h3>About Us</h3>
        <p>
          {/* The mission of Saad Ahmad Youth Foundation is to foster mutual
          co-operation and unity within youth of the family. SAYF recognizes the
          importance of promoting general and educational welfare of the entire
          family. */}
          The SAYF Online Academy is designed to help students within the family
          to bridge the wide gap between the traditional method of learning
          (theoretical) and the practical application of the knowledge to become
          industrious in the field of their studies{" "}
        </p>
      </div>
      <div className="committees">
        <h3>Committees</h3>
        <ol type="1">
          <li>Welfare Committee</li>
          <li>Student Affairs Committee</li>
          <li>Financial Committee</li>
        </ol>
      </div>

      <div className="links">
        <h3>Links</h3>
        <ul className="">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="students">Student</a>
          </li>
          <li>
            <a href="/ziyara">Ziyara</a>
          </li>
          <li>
            <a href="/committees">Committees</a>
          </li>
          {/* <li>
              <a href="">Images</a>
            </li> */}
        </ul>
      </div>
    </FooterCont>
  );
}
export default Footer;

const FooterCont = styled.footer`
  background: #03203c;
  /* background: #207398; */
  padding: 10px;
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 30vh;
  color: #e4e4e4cc;

  div {
    /* border: 1px solid #ccc; */
    width: 30%;
    margin: 15px 10px;
    text-align: justify;
  }
  div h3 {
    color: #fff;
    margin-bottom: 15px;
  }
  .links a {
    /* text-decoration: none; */
    color: #e4e4e4cc;
  }
  .links li {
    margin: 10px 0px;
    list-style: none;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    div {
      width: 85%;
    }
  }
`;
