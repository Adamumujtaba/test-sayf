import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteRecordStart,
  setCurrentRecord,
  updateRecordStart,
} from "../../redux/recordSlice";
import { Modal } from "antd";

// eslint-disable-next-line react/prop-types
function VisitedMem({ records, year, refetch }) {
  // eslint-disable-next-line react/prop-types
  const list = records?.filter((item) => item.yr === year);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isUpdating } = useSelector((state) => state.records);

  const findAndNavigate = (data) => {
    dispatch(setCurrentRecord(data));
    navigate("/map");
  };

  const [data, setData] = useState({
    fullname: "",
    geo: "",
    phone: "",
    address: "",
    file: "",
    yr: "",
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

  const handleUpdate = (e) => {
    e.preventDefault();
    let payload = {
      data: data,
      callback: () => {
        refetch();
        setIsModalOpen(false);
      },
    };
    dispatch(updateRecordStart(payload));
  };
  const handleDelete = (id) => {
    let payload = {
      data: id,
      callback: () => {
        refetch();
        setIsModalOpen(false);
      },
    };
    dispatch(deleteRecordStart(payload));
  };
  return (
    <>
      <div className="members">
        {list?.map((item) => {
          return (
            <React.Fragment key={item._id}>
              <div className="card">
                <div className="card-img">
                  <img
                    src={item.imgUrl}
                    alt="img"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="card-info">
                  <p>{item.fullname}</p>
                  <p>{item.phone}</p>
                  <div className="btn">
                    {/* <button
                      onClick={() => {
                        setIsModalOpen(true);
                        setData(item);
                      }}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(item._id)}>
                      {" "}
                      Delete
                    </button> */}
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
                title={isUpdating ? "Updating..." : "Update Record"}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}>
                <form className="form" onSubmit={(e) => handleUpdate(e)}>
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
                    placeholder="phone number"
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
                  <input type="submit" value="Update" />
                </form>
              </Modal>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default VisitedMem;
