import { Modal } from 'antd';
import { useEffect, useState } from 'react';
import VisitedMembers from './VisitedMembers';
import { useAddRecordMutation, useVisitRecordQuery } from './visit-api';
function Visit() {
  const { data: records, isLoading } = useVisitRecordQuery();
  const [addRecord, { isSuccess, isLoading: isRecordLoading }] =
    useAddRecordMutation();
  const [data, setData] = useState({
    name: '',
    geo: '',
    phone: '',
    address: '',
    file: '',
    yr: '',
  });
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

  async function handleSubmit() {
    await addRecord(data);
  }

  useEffect(() => {
    if (isSuccess) {
      setIsModalOpen(false);
    }
  }, [isSuccess]);
  return (
    <div className="bg-gray-light min-h-[80vh]">
      <div className="flex justify-between p-4">
        <div>
          <h4 className="font-bold text-lg">Family Members Visited</h4>
          <p>
            Total Number:{' '}
            {records?.data?.length === 0 ? ' 0' : records?.data?.length}
          </p>
        </div>
        <button
          className="bg-[#00d094] w-[60px] h-8 rounded-md shadow-lg hover:shadow-none hover:text-[#fff]"
          onClick={() => setIsModalOpen(true)}>
          Add
        </button>
      </div>

      {records?.data?.length === 0 ? (
        <div className="flex items-center justify-center h-[500px] ">
          <h2 className="text-center">No data</h2>
        </div>
      ) : (
        <div>
          <VisitedMembers
            records={records?.data}
            // year={item.yr}
            // refetch={refetch}
            isLoading={isLoading}
          />
        </div>
      )}

      <Modal
        title="Add New Record"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}>
        <div className="form">
          <input
            type="text"
            onChange={(e) => setData({ ...data, fullname: e.target.value })}
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
            value={isRecordLoading ? 'Uploading...' : 'Submit'}
            id=""
            onClick={handleSubmit}
            disabled={isRecordLoading ? true : false}
          />
        </div>
      </Modal>
    </div>
  );
}

export default Visit;
