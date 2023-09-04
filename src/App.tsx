import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
export const baseUrl = "https://sayf-new.fly.dev/records";
interface DataProps {
  fullname: string;
  _id: string;
}

function App() {
  const [data, setData] = useState<null | DataProps[]>([]);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <>
          {data?.map((item) => {
            return <p key={item._id}>{item.fullname}</p>;
          })}
        </>
      </header>
    </div>
  );
}

export default App;
