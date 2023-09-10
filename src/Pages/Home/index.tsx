import { CheckCircleOutlined } from "@ant-design/icons";
import Goals from "../../assets/goals.svg";
import Task from "../../assets/task.svg";
// import Members from "../../components/Members/index";
import styled from "styled-components";

function Home() {
  return (
    <div>
      <HomeDiv>
        <div className="hero-section">
          <div className="hero-one">
            <p>Online Academy.</p>
            <h2>Sa'ad Ahmad Youth Foundation (SAYF) </h2>
            {/* <button>Learn More</button> */}
            {/* <p>
              The SAYF Online Academy is designed to help students within the
              family to bridge the wide gap between the traditional method of
              learning (theoretical) and the practical application of the
              knowledge to become industrious in the field of their studies.
            </p> */}
          </div>

          <div className="hero-two">
            <div>
              <img src={Goals} alt="goals" width={"100%"} height={"100%"} />
            </div>
            <div className="aims">
              <h3>Aims and Objectives</h3>
              <ol>
                <li>
                  <CheckCircleOutlined />
                  Prepare the students for the labour market and to be able to
                  compete with the knowledge economy
                </li>
                <li>
                  <CheckCircleOutlined /> Help them discover their passion and
                  talent
                </li>
                <li>
                  <CheckCircleOutlined />
                  Motivate and inspire them to excel in their field of study
                </li>
                <li>
                  <CheckCircleOutlined />
                  Engage the students and help them to develop relevant skills
                </li>
                <li>
                  <CheckCircleOutlined />
                  Encourage them to develop an entrepreneurial spirit
                </li>
                <li>
                  <CheckCircleOutlined />
                  Help them set clear goals and develop realistic plans to
                  achieve them
                </li>
                <li>
                  <CheckCircleOutlined />
                  Encourage them to be persistent to overcome obstacles
                </li>
                <li>
                  <CheckCircleOutlined />
                  Help them develop soft skills to complement the hard skills
                </li>
                <li>
                  <CheckCircleOutlined />
                  Introduce them to their potential mentors
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="hero-three">
          <div>
            <img src={Task} alt="goals" width={"100%"} height={"100%"} />
          </div>
          <div className="mission">
            <h3>Mission</h3>
            <p>
              The mission of Saad Ahmad Youth Foundation is to foster mutual
              co-operation and unity within youth of the family. SAYF recognizes
              the importance of promoting general and educational welfare of the
              entire family.
            </p>
          </div>
        </div>

        <div>{/* <Members /> */}</div>
      </HomeDiv>
    </div>
  );
}

export default Home;

export const HomeDiv = styled.div`
  .hero-one {
    width: 100%;
    text-align: center;
    margin: 10px auto;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .hero-two {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    /* height: 40vh; */
  }
  .hero-two > div {
    margin: 10px;
  }
  .aims h3 {
    margin: 20px 0px;
  }
  .aims li {
    list-style: none;
    display: flex;
    align-items: flex-start;
    margin: 5px 0px;
  }
  .aims li svg {
    margin: 0px 10px;
  }

  .hero-three {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: justify;
    flex-direction: row-reverse;
    margin: 20px;
  }
  .hero-three > div {
    width: 50%;
    margin: 20px;
  }
  .mission h3 {
    font-size: 1.4rem;
    margin: 15px 0px;
  }

  @media screen and (max-width: 768px) {
    .hero-one {
      /* background: red; */
      /* height: 60vh; */
    }
    .hero-two {
      flex-wrap: wrap;
      height: auto;
      width: 90%;
      margin: auto;
    }
    .hero-three {
      flex-wrap: wrap;
      height: auto;
      width: 90%;
      margin: auto;
    }
    .hero-three > div {
      width: 100%;
    }
  }
`;
