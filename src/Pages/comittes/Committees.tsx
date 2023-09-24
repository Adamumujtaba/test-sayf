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
  const [isModalOpen, setIsModalOpen] = useState({
    create: false,
    update: false,
    data: {},
  });
  const financial = data?.data?.filter(
    (item: commiteePros) => item?.committee?.toLowerCase() === 'financial'
  );
  const education = data?.data?.filter(
    (item: commiteePros) => item?.committee?.toLowerCase() === 'education'
  );

  if (isError) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <CommitteeCon>
      <div className="header">
        <h2>Committees</h2>
        <button className="add" onClick={() => setIsOpen(true)}>
          Add
        </button>
      </div>
      <div className="main">
        <div className="financial">
          <h3>Financial Committee</h3>
          <div className="members">
            {financial?.map((item: commiteePros) => {
              return (
                <div key={item._id} className="card">
                  <div className="card-img">
                    <img
                      src={item.imgUrl}
                      alt="pic"
                      width={'100%'}
                      height={'100%'}
                    />
                  </div>
                  <div className="card-info">
                    <p>{item.fullname}</p>
                    <p>{item.phone}</p>
                    <p>{item.committee}</p>
                  </div>
                  <div className="btn">
                    <button
                      onClick={() =>
                        setIsModalOpen({
                          ...isModalOpen,
                          update: true,
                          data: item,
                        })
                      }>
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        // deleteData(item._id, setIsModalOpen);
                        deleteCommittee(item._id);
                      }}
                      style={{ display: 'flex', justifyContent: 'center' }}>
                      {isDeleting ? <Spin size="small" /> : 'Delete'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="education">
          <h3>Education Committee</h3>
          <div className="members">
            {education?.map((item: commiteePros) => {
              return (
                <div key={item._id} className="card">
                  <div className="card-img">
                    <img
                      src={item.imgUrl}
                      alt="pic"
                      width={'100%'}
                      height={'100%'}
                    />
                  </div>
                  <div className="card-info">
                    <p>{item.fullname}</p>
                    <p>{item.phone}</p>
                    <p>{item.committee}</p>
                  </div>
                  <div className="btn">
                    <button>Edit</button>
                    <button
                      onClick={() => {
                        deleteCommittee(item._id);
                      }}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
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
          open={isModalOpen.update}
          onOk={() => setIsModalOpen({ ...isModalOpen, update: false })}
          onCancel={() => setIsModalOpen({ ...isModalOpen, update: false })}>
          <CommitteeUpdateForm
            initialValues={isModalOpen.data}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
        </Modal>
      </>
    </CommitteeCon>
  );
}

export default Committees;
