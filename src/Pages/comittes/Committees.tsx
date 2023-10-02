import { useState } from 'react';
import { CommitteeCon } from './committees.style';
import CommitteeForm from '../../Components/Forms/CommitteeForm';
import { Modal, Spin } from 'antd';
// import useGetRecord from '../../hooks/useGetRecords';
import CommitteeUpdateForm from '../../Components/Forms/CommitteeUpdateForm';
// import useDelete from '../../hooks/useDelete';
import { commiteePros } from '../../constant';
import { useCommitteeQuery, useDeleteCommitteeMutation } from './Committee-api';

function Committees() {
  const { data, isError } = useCommitteeQuery('');
  const [deleteCommittee, { isLoading: isDeleting }] =
    useDeleteCommitteeMutation();
  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [update, setUpdate] = useState({});
  const financial = data?.data?.filter(
    (item: commiteePros) => item?.committee?.toLowerCase() === 'financial'
  );

  const education = data?.data?.filter(
    (item: commiteePros) => item?.committee?.toLowerCase() === 'education'
  );

  if (isError) {
    return (
      <div style={{ minHeight: '80vh' }}>
        <h2 style={{ color: 'red' }}>Something went wrong</h2>
      </div>
    );
  }

  return (
    <section className="bg-gray-light">
      <div className="flex justify-between p-4">
        <h2 className=" font-bold text-xl">Committees</h2>
        <button
          className="bg-[#00d094] w-[60px] h-8 rounded-md shadow-lg hover:shadow-none hover:text-[#fff]"
          onClick={() => setIsOpen(true)}>
          Add
        </button>
      </div>

      <div>
        <h3 className="font-bold text-lg underline ml-5">
          Financial Committee
        </h3>
        <div className=" grid gap-2 justify-center md:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]">
          {financial?.map((item: commiteePros) => {
            return (
              <div
                key={item._id}
                className="bg-[#fff] mx-4 my-3 h-[500px] p-5 shadow-lg rounded-md md:w-[350px]">
                <div className="h-[75%]">
                  <img
                    src={item.imgUrl}
                    alt="pic"
                    className="h-[100%] w-full"
                  />
                </div>
                <div className="bg-[#00d094] px-3 min-h-[25%] ">
                  <p>{item.fullname}</p>
                  <p>{item.phone}</p>
                  <p>{item.committee}</p>
                  <div className="pb-1 flex items-end  justify-between">
                    <button
                      className="bg-gray-light shadow-lg w-[80px] rounded-sm"
                      onClick={() => {
                        setIsModalOpen(true);
                        setUpdate(item);
                      }}>
                      Edit
                    </button>
                    <button
                      className="bg-gray-light shadow-lg w-[80px] rounded-sm"
                      onClick={() => {
                        deleteCommittee(item._id);
                      }}
                      style={{ display: 'flex', justifyContent: 'center' }}>
                      {isDeleting ? <Spin size="small" /> : 'Delete'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="font-bold text-lg underline ml-5">
          Education Committee
        </h3>
        <div className=" grid gap-2 justify-center md:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]">
          {education?.map((item: commiteePros) => {
            return (
              <div
                key={item._id}
                className="bg-[#fff] mx-4 my-3 h-[500px] p-5 shadow-lg rounded-md md:w-[350px]">
                <div className="h-[75%]">
                  <img
                    src={item.imgUrl}
                    alt="pic"
                    className="h-[100%] w-full"
                  />
                </div>
                <div className="bg-[#00d094] px-3 min-h-[25%] ">
                  <p>{item.fullname}</p>
                  <p>{item.phone}</p>
                  <p>{item.committee}</p>
                  <div className="pb-1 flex items-end  justify-between">
                    <button
                      className="bg-gray-light shadow-lg w-[80px] rounded-sm"
                      onClick={() => {
                        setIsModalOpen(true);
                        setUpdate(item);
                      }}>
                      Edit
                    </button>
                    <button
                      className="bg-gray-light shadow-lg w-[80px] rounded-sm"
                      onClick={() => {
                        deleteCommittee(item._id);
                      }}
                      style={{ display: 'flex', justifyContent: 'center' }}>
                      {isDeleting ? <Spin size="small" /> : 'Delete'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <>
        <Modal
          title="Add New Record"
          open={isOpen}
          onOk={() => setIsOpen(false)}
          onCancel={() => setIsOpen(false)}>
          <CommitteeForm isOpen={isOpen} setIsOpen={setIsOpen} />
        </Modal>
        <Modal
          title="Update Record"
          open={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}>
          <CommitteeUpdateForm
            initialValues={update}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
        </Modal>
      </>
    </section>
  );
}

export default Committees;
