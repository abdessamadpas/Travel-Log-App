import './App.css';
import React from 'react';

import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


function App() {
  const position = [35.759465, -5.823995]

  return(
    <div style={{width:'100%', height:'100%'}}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ background: '#242525' }} >
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`} />
      <Marker position={position}>
        <Popup>
        hilliw <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  </div>

);
}

export default App;
