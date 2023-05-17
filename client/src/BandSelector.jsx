import React from "react";

export default function BandSelector(props) {
  const { selectedBand, setSelectedBand } = props;

  return (
    <>
      <button id="b2Button" onClick={(_) => setSelectedBand("B2")}></button>
      <button id="b3Button" onClick={(_) => setSelectedBand("B3")}></button>
      <button id="b4Button" onClick={(_) => setSelectedBand("B4")}></button>
    </>
  );
}
