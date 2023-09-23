import { styled } from 'styled-components';
import Records from './MemData';

function Members() {
  return (
    <Cont>
      <div className="members-header">
        <h3>Members</h3>
      </div>
      <div className="members">
        {Records.map((item, index) => {
          return (
            <div key={index} className="card">
              <div className="card-img">
                <img src={item.img} alt="img" width={'100%'} height={'100%'} />
              </div>
              <div className="card-info">
                <p className="name">{item.name}</p>
                <p className="title">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Cont>
  );
}

export default Members;

export const Cont = styled.div`
  .members-header {
    /* background: red; */
    text-align: center;
    padding: 20px;
    margin: 20px 10px;
    border-bottom: 1px solid #45137f;
    font-size: 1.4rem;
    /* margin: 15px 0px; */
  }
  /* background: grey; */
  .members {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  .card {
    /* border: 1px solid #ccc; */
    position: relative;
    width: 330px;
    height: 500px;
    margin: 15px 10px;
    background: #fff;
    padding: 15px;
    border-radius: 3px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
  .card-img {
    border-radius: 1px;
    height: 85%;
  }
  .card-img img {
    border-radius: 4px;
  }
  .card-info {
    /* background: red; */
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .name {
    font-weight: 600;
    font-size: larger;
  }
  .title {
    position: absolute;
    right: 0px;
    bottom: 0;
    color: #fff;
    /* background: #45137f; */
    background: #03203c;
    width: 140px;
    text-align: center;
    padding: 2px;
    border-radius: 10px 0px 5px 0px;
  }
`;
