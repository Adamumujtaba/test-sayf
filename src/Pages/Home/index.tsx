import { CheckCircleOutlined } from '@ant-design/icons';
import Goals from '../../assets/goals.svg';
import Task from '../../assets/task.svg';
import styled from 'styled-components';
import Members from '../../Components/Members';

function Home() {
  return (
    <div>
      <div className="bg-[#000] min-h-full text-gray-light p-4">
        <div className="flex items-center flex-col justify-center h-[50vh]">
          <p className="text-[#00d094] font-bold">Online Academy.</p>
          <h2 className="text-2xl text-center font-boldtext-[#00d094] md:text-4xl  py-4 ">
            Sa'ad Ahmad Youth Foundation (SAYF){' '}
          </h2>
          {/* <button>Learn More</button> */}
          {/* <p>
              The SAYF Online Academy is designed to help students within the
              family to bridge the wide gap between the traditional method of
              learning (theoretical) and the practical application of the
              knowledge to become industrious in the field of their studies.
            </p> */}
        </div>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 px-10 items-center">
          <div className="mx-4">
            <img
              src={Goals}
              alt="goals"
              className="w-full h-full mx-auto my-4"
            />
          </div>
          <div className="text-m md:text-xl mx-4">
            <h3 className="font-semibold mx-7 text-[#00d094]">
              Aims and Objectives
            </h3>
            <ol>
              <li className="flex">
                <CheckCircleOutlined className="my-0 mr-[10px] text-[#00d094]" />
                Prepare the students for the labour market and to be able to
                compete with the knowledge economy
              </li>
              <li className="flex">
                <CheckCircleOutlined className="my-0 mr-[10px] text-[#00d094]" />{' '}
                Help them discover their passion and talent
              </li>
              <li className="flex">
                <CheckCircleOutlined className="my-0 mr-[10px] text-[#00d094]" />
                Motivate and inspire them to excel in their field of study
              </li>
              <li className="flex">
                <CheckCircleOutlined className="my-0 mr-[10px] text-[#00d094]" />
                Engage the students and help them to develop relevant skills
              </li>
              <li className="flex">
                <CheckCircleOutlined className="my-0 mr-[10px] text-[#00d094]" />
                Encourage them to develop an entrepreneurial spirit
              </li>
              <li className="flex">
                <CheckCircleOutlined className="my-0 mr-[10px] text-[#00d094]" />
                Help them set clear goals and develop realistic plans to achieve
                them
              </li>
              <li className="flex">
                <CheckCircleOutlined className="my-0 mr-[10px] text-[#00d094]" />
                Encourage them to be persistent to overcome obstacles
              </li>
              <li className="flex">
                <CheckCircleOutlined className="my-0 mr-[10px] text-[#00d094]" />
                Help them develop soft skills to complement the hard skills
              </li>
              <li className="flex">
                <CheckCircleOutlined className="my-0 mr-[10px] text-[#00d094]" />
                Introduce them to their potential mentors
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-[#efefef] max-w-[1240px] mx-auto grid md:grid-cols-2 px-10 items-center h-[80vh]">
        <div className="p-2 mx-3 ">
          <h3 className="font-bold text-xl ">Mission</h3>
          <p className="text-l">
            The mission of Saad Ahmad Youth Foundation is to foster mutual
            co-operation and unity within youth of the family. SAYF recognizes
            the importance of promoting general and educational welfare of the
            entire family.
          </p>
        </div>
        <div>
          <img src={Task} alt="goals" width={'100%'} height={'100%'} />
        </div>
      </div>

      <div>
        <Members />
      </div>
    </div>
  );
}

export default Home;
