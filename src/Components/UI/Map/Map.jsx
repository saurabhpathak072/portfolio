import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

const Map = ({position}) => {
   
  return (
    <div >
      <MapContainer
        center={position}
        zoom={13}
        className={styles.mapContainer}
        //  style={{ height: "400px", width: "100%" }}
        // {...rest}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '
        />
        {/* <Marker position={position}>
          <Popup>
           Pune
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
};

export default Map;
