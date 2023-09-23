import { useState } from 'react';
import StudentTable from './StudentTable';
import { StdContainer } from './student.style';
import { Modal } from 'antd';
import GradForm from '../../Components/Forms/GradForm';
import Loader from '../../Components/Loader';

import { useStudentsQuery } from './student-api';

function Student() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, error, isLoading } = useStudentsQuery('');

  console.log(data);
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h2>Something went wrong...</h2>;
  }

  return (
    <StdContainer>
      <div className="student-header">
        <button className="add" onClick={() => setIsModalOpen(true)}>
          Add
        </button>
      </div>
      <div className="student-main">
        <div>
          <StudentTable data={data} />
        </div>
      </div>
      <Modal
        title="Add new record"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}>
        <GradForm setIsModalOpen={setIsModalOpen} />
      </Modal>
    </StdContainer>
  );
}

export default Student;
