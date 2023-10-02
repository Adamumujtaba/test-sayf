/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Modal } from 'antd';
import { useDeleteRecordMutation, useUpdateRecordMutation } from './visit-api';
import { LoadingOutlined } from '@ant-design/icons';

function VisitedMembers({ records }) {
  const navigate = useNavigate();
  const [deleteRecord, { isLoading }] = useDeleteRecordMutation();
  const [updateRecord, { isSuccess, isLoading: isUpdating }] =
    useUpdateRecordMutation();
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
      setIsModalOpen(false);
    }
  }, [isSuccess]);

  const handleUpdate = (data) => {
    console.log('Update', data);
    updateRecord(data);
  };
  const handleDelete = (id) => {
    deleteRecord(id);
  };

  return (
    <>
      <div className=" grid gap-2 justify-center md:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]">
        {records?.map((item) => {
          return (
            <React.Fragment key={item._id}>
              <div className="bg-[#fff] mx-4 my-3 h-[500px] p-5 shadow-lg rounded-md md:w-[350px]">
                <div className="h-[75%]">
                  <img
                    className="h-[100%] w-full"
                    src={item.imgUrl}
                    alt="img"
                  />
                </div>
                <div className="bg-[#00d094] px-3 min-h-[25%] ">
                  <p className="font-bold"> {item.fullname}</p>
                  <p>{item.phone}</p>
                  <p>
                    {item.address} <small>{item.yr}</small>
                  </p>
                  <div className="pb-1 flex items-end  justify-between">
                    <button
                      className="bg-gray-light shadow-lg w-[80px] rounded-sm"
                      onClick={() => {
                        setIsModalOpen(true);
                        setData(item);
                      }}>
                      Edit
                    </button>
                    <button
                      className="bg-gray-light shadow-lg w-[80px] rounded-sm"
                      onClick={() => handleDelete(item._id)}>
                      {isLoading ? <LoadingOutlined /> : 'Delete'}
                    </button>
                    <button
                      className="bg-gray-light shadow-lg w-[80px]  rounded-sm"
                      onClick={() => {
                        findAndNavigate(item);
                      }}>
                      Locate
                    </button>
                  </div>
                </div>
              </div>

              <Modal
                title={isUpdating ? 'Updating...' : 'Update Record'}
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
                    value={`${isUpdating ? 'Updating... ' : 'Update'}   `}
                    onClick={() => handleUpdate(data)}
                    disabled={isUpdating ? true : false}
                  />
                </div>
              </Modal>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default VisitedMembers;
