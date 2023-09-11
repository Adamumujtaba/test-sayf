import { Button, Empty, Modal, Tabs } from "antd";
import { useState } from "react";
import useGetRecord from "../../hooks/useGetRecords";
import VisitedMembers from "./VisitedMembers";
import usePostVisit from "../../hooks/usePostVisit";

function Visit() {
  const { data: records, isLoading, refetch } = useGetRecord("records");
  const { postData, isPosting } = usePostVisit();
  const [data, setData] = useState({
    name: "",
    geo: "",
    phone: "",
    address: "",
    file: "",
    yr: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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

  function handleSubmit(e) {
    e.preventDefault();
    let payload = {
      data: data,
      callback: () => {
        refetch();
        setIsModalOpen(false);
      },
    };
    // dispatch(postRecordStart(payload));
    postData(payload, refetch, setIsModalOpen);
  }

  const uniqueItemsMap = new Map();
  // Filter out duplicates based on the "yr" field
  records.forEach((item) => {
    const uniqueKey = item.yr;
    if (!uniqueItemsMap.has(uniqueKey)) {
      uniqueItemsMap.set(uniqueKey, item);
    }
  });
  // Convert the map values to an array
  const uniqueItems = Array.from(uniqueItemsMap.values());

  return (
    <div className="visit-container">
      <div className="header">
        <h4>Family Members Visited</h4>
        <p>Total No: {records.length === 0 ? " 0" : records.length}</p>
      </div>
      {isLoading ? (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{
            height: 60,
          }}
          description={<span> Loading...</span>}></Empty>
      ) : (
        <div>
          <Tabs
            tabBarExtraContent={
              <Button onClick={() => setIsModalOpen(true)}>Add</Button>
            }
            type="card"
            size={"medium"}
            items={uniqueItems.map((item) => {
              return {
                label: `${item.yr}`,
                key: `${item?._id}`,
                children: (
                  <VisitedMembers
                    records={records}
                    year={item.yr}
                    refetch={refetch}
                    isLoading={isLoading}
                  />
                ),
              };
            })}
          />
        </div>
      )}

      <Modal
        title="Add New Record"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Fullname"
          />
          <input
            type="tel"
            onChange={(e) => setData({ ...data, geo: e.target.value })}
            placeholder="Geolocation"
          />
          <input
            type="tel"
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            placeholder="phone number"
          />
          <input
            type="date"
            onChange={(e) => setData({ ...data, yr: e.target.value })}
            placeholder="Date"
          />
          <textarea
            onChange={(e) => setData({ ...data, address: e.target.value })}
            placeholder="address"></textarea>
          <input onChange={(e) => handleImageChange(e)} type="file" />
          <input
            type="submit"
            value={isPosting ? "Uploading..." : "Submit"}
            id=""
          />
        </form>
      </Modal>
    </div>
  );
}

export default Visit;
