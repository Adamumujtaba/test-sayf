import { useState } from "react";
import useGetRecord from "../../hooks/useGetRecords";
import StudentTable from "./StudentTable";
import { StdContainer } from "./student.style";
import { Tabs, Modal } from "antd";
import GradForm from "../../Components/Forms/GradForm";
import Loader from "../../Components/Loader";
import EmptyState from "../../Components/EmptyState";
import { dataProps } from "../../constant";

function Student() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, refetch } = useGetRecord("grad");
  const uniqueItemsMap = new Map();
  // Filter out duplicates based on the "yr" field
  data.forEach((item: dataProps) => {
    const uniqueKey = item.employed;
    if (!uniqueItemsMap.has(uniqueKey)) {
      uniqueItemsMap.set(uniqueKey, item);
    }
  });

  // Convert the map values to an array
  const uniqueItems = Array.from(uniqueItemsMap.values());
  if (isLoading) {
    return <Loader />;
  }

  return (
    <StdContainer>
      <div className="student-header">
        <button className="add" onClick={() => setIsModalOpen(true)}>
          Add
        </button>
      </div>
      <div className="student-main">
        <Tabs
          type="card"
          items={uniqueItems.map((item) => {
            return {
              label: `${item.employed ? "Employed" : "Unemployed"} `,
              key: `${item._id}`,
              children:
                data.length === 0 ? (
                  <EmptyState />
                ) : (
                  <StudentTable data={data} employed={item.employed} />
                ),
            };
          })}
        />
      </div>
      <Modal
        title="Add new record"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}>
        <GradForm setModalIsOpen={setIsModalOpen} refetch={refetch} />
      </Modal>
    </StdContainer>
  );
}

export default Student;
