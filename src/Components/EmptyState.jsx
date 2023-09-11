import { Empty } from "antd";

function EmptyState() {
  return (
    <>
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Empty description="Hello" size="large" />
      </div>
    </>
  );
}

export default EmptyState;
