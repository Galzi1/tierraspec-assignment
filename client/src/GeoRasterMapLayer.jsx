import React, { useEffect, useRef } from "react";
import parseGeoraster from "georaster";
import GeoRasterLayer from "georaster-layer-for-leaflet";
import { useMap } from "react-leaflet";
import chroma from "chroma-js";

export default function GeoRasterMapLayer() {
  const map = useMap();
  const geoTiffLayerRef = useRef();

  useEffect(() => {
    fetch(window.location.href + "api/v1/coloredSatelliteData?band=B3", {
      mode: "no-cors",
    })
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => {
        console.log("arrayBuffer", arrayBuffer);
        parseGeoraster(arrayBuffer).then((georaster) => {
          console.log("georaster", georaster);
          const min = georaster.mins[0];
          const range = georaster.ranges[0];
          const scale = chroma.scale("Spectral").domain([1, 0]);
          const options = {
            pixelValuesToColorFn: function (pixelValues) {
              var pixelValue = pixelValues[0];
              if (pixelValue === 0) return null;
              const scaledPixelValue = (pixelValue - min) / range;
              const color = scale(scaledPixelValue).hex();
              return color;
            },
            resolution: 256,
            opacity: 0.7,
          };
          options.georaster = georaster;
          geoTiffLayerRef.current = new GeoRasterLayer(options);
          map.addLayer(geoTiffLayerRef.current);
        });
      });
    return () => {};
  }, [map]);
}
