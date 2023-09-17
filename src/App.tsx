import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Student from "./Pages/Students/indext";
import Visit from "./Pages/Visit";
import Footer from "./Components/Footer";
import Committees from "./Pages/comittes/Committees";
import LocateHouseMap from "./Pages/Visit/LocateHouseMap";

function App() {
  return (
    <>
      <>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/students" Component={Student} />
          <Route path="/committees" Component={Committees} />
          <Route path="/ziyara" Component={Visit} />
          <Route path="/map" Component={LocateHouseMap} />
        </Routes>
        <Footer />
      </>
    </>
  );
}

export default App;
