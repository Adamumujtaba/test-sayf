/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Modal, notification } from 'antd';
import styled from 'styled-components';
import { useDeleteRecordMutation, useUpdateRecordMutation } from './visit-api';
import { LoadingOutlined } from '@ant-design/icons';

function VisitedMembers({ records }) {
  const navigate = useNavigate();
  const [deleteRecord, { isLoading, isError, isSuccess }] =
    useDeleteRecordMutation();
  const [updateRecord] = useUpdateRecordMutation();
  const findAndNavigate = (data) => {
    localStorage.setItem('currentRecord', JSON.stringify(data));
    navigate('/map');
  };

  const [data, setData] = useState({
    fullname: '',
    geo: '',
    phone: '',
    address: '',
    file: '',
    yr: '',
  });
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleImageChange = async (e) => {
    let file = e.target.files[0];

    setData({ ...data, file: file });
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     setImage(reader.result);
    //   };
    // reader.readAsDataURL(file);
    // }
  };

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: 'Record Deleted Successfully',
        style: { marginTop: '45px' },
      });
    }
    if (isError) {
      notification.error({
        message: 'Fail Delete',
        style: { marginTop: '45px' },
      });
    }
  }, [isSuccess, isError]);

  const handleUpdate = (data) => {
    updateRecord(data);
  };
  const handleDelete = (id) => {
    deleteRecord(id);
  };

  return (
    <Cont>
      <div className="members">
        {records?.map((item) => {
          return (
            <React.Fragment key={item._id}>
              <div className="card">
                <div className="card-img">
                  <img
                    src={item.imgUrl}
                    alt="img"
                    width={'100%'}
                    height={'100%'}
                  />
                </div>
                <div className="card-info">
                  <p>{item.fullname}</p>
                  <p>{item.phone}</p>
                  <div className="btn">
                    <button
                      onClick={() => {
                        setIsModalOpen(true);
                        setData(item);
                      }}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(item._id)}>
                      {isLoading ? <LoadingOutlined /> : 'Delete'}
                    </button>
                    <button
                      onClick={() => {
                        findAndNavigate(item);
                      }}>
                      Locate
                    </button>
                  </div>
                </div>
              </div>

              <Modal
                // title={isUpdating ? 'Updating...' : 'Update Record'}
                title={'Updating...'}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}>
                <div className="form">
                  <input
                    type="text"
                    value={data.fullname}
                    onChange={(e) =>
                      setData({ ...data, fullname: e.target.value })
                    }
                    placeholder="Fullname"
                  />
                  <input
                    type="tel"
                    value={data.geo}
                    onChange={(e) => setData({ ...data, geo: e.target.value })}
                    placeholder="Geolocation"
                  />
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
                    placeholder="Phone number"
                  />
                  <input
                    type="date"
                    value={data.yr}
                    onChange={(e) => setData({ ...data, yr: e.target.value })}
                    placeholder="Date"
                  />
                  <textarea
                    value={data.address}
                    onChange={(e) =>
                      setData({ ...data, address: e.target.value })
                    }
                    placeholder="address"></textarea>
                  <input onChange={(e) => handleImageChange(e)} type="file" />
                  <input
                    type="submit"
                    value="Update"
                    onClick={() => handleUpdate(data)}
                  />
                </div>
              </Modal>
            </React.Fragment>
          );
        })}
      </div>
    </Cont>
  );
}

export default VisitedMembers;

const Cont = styled.div`
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
  .btn {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .btn button {
    background: #000000;
    color: #fff;
    padding: 6px;
    border: none;
    border-radius: 4px;
    width: 60px;
    cursor: pointer;
  }
  .btn button:hover {
    background: lightgray;
    color: #000000;
    border-radius: 0px;
    transition: all 0.33s ease-in-out;
    border: 1px solid #000000;
  }
`;
