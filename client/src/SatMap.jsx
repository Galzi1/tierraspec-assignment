import React, { useState } from "react";
import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
import BandSelector from "./BandSelector";
import GeoRasterMapLayer from "./GeoRasterMapLayer";
import "leaflet/dist/leaflet.css";

export default function SatMap() {
  const [selectedBand, setSelectedBand] = useState("");
  fetch(window.location.href + "api/v1/coloredSatelliteData?band=B3").then(
    console.log
  );
  //const geoRasterLayer =

  return (
    <MapContainer id="mapId" zoom={13} center={[39.5, -98.35]}>
      <TileLayer
        attribution='&copy; <a href="http://www.esri.com/">Esri</a> i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        maxZoom={18}
      />
      <LayersControl.Overlay name="B3Layer">
        <GeoRasterMapLayer />
      </LayersControl.Overlay>
      <BandSelector
        selectedBand={selectedBand}
        setSelectedBand={setSelectedBand}
      />
    </MapContainer>
  );
}
