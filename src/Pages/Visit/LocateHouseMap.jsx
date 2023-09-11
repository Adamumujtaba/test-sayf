import { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "react-google-maps";
// import WrappedMap from "./WrappedMap";
import withScriptjs from "react-google-maps/lib/withScriptjs";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

function LocateHouseMap() {
  const { state } = useLocation();

  const { currentRecord } = useSelector((state) => state.records);

  const [houseDetails, setHouseDetails] = useState(null);
  const houseGeoInfo = currentRecord?.geo?.split(",");
  const latitude = houseGeoInfo[0];
  const longitude = houseGeoInfo[1];

  console.log("CURRENT RECORD: ", currentRecord);

  function Map() {
    return (
      <GoogleMap
        defaultZoom={20}
        defaultCenter={{ lat: Number(latitude), lng: Number(longitude) }}>
        <Marker
          position={{
            lat: Number(latitude),
            lng: Number(longitude),
          }}
          onClick={() => {
            setHouseDetails({
              lat: Number(latitude),
              lng: Number(longitude),
              name: state.fullname,
              address: state.address,
            });
          }}
        />

        {houseDetails && (
          <InfoWindow
            onCloseClick={() => setHouseDetails(null)}
            position={{ lat: Number(latitude), lng: Number(longitude) }}>
            <div>
              <h4>{houseDetails?.name}</h4>
              <p>{houseDetails?.address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }

  // useEffect(() => {
  //   const portalContainer = document?.getElementById("portal-container");
  //   ReactDOM?.createPortal(<Map />, portalContainer);
  // }, []);

  const WrappedMap = withScriptjs(withGoogleMap(Map));
  return (
    <>
      <div className="portal-container">
        <div>
          <h4>Name: {currentRecord.fullname}</h4>
          <p>Phone Number: {currentRecord.phone}</p>
        </div>
        <div style={{ width: "100%", height: "80vh" }}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
      </div>
    </>
  );
}

export default LocateHouseMap;
