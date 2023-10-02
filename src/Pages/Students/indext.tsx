import { useState } from 'react';
import StudentTable from './StudentTable';
import { Modal } from 'antd';
import GradForm from '../../Components/Forms/GradForm';
import Loader from '../../Components/Loader';

import { useStudentsQuery } from './student-api';

function Student() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, error, isLoading } = useStudentsQuery('');

  if (isLoading) {
    return (
      <div style={{ minHeight: '80vh' }}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ minHeight: '80vh' }}>
        <h2 style={{ color: 'red' }}>Something went wrong</h2>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] p-5">
      <div className="flex justify-end">
        <button
          className="shadow-xl bg-[#fff] p-1 w-[70px] rounded-lg"
          onClick={() => setIsModalOpen(true)}>
          Add
        </button>
      </div>
      <div className="p-5 h-full">
        <StudentTable data={data} />
      </div>
      <Modal
        title="Add new record"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}>
        <GradForm setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
}

export default Student;
