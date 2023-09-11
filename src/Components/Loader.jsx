import { Spin } from "antd";

function Loader() {
  return (
    <>
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Spin size="large" />
      </div>
    </>
  );
}

export default Loader;
