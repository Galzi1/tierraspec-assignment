var express = require("express");
const {
  getColoredSatelliteData: getColoredSatelliteDataFromService,
} = require("./coloredSatelliteDataService");

var router = express.Router();

function getColoredSatelliteData(req, res) {
  try {
    const band = req.query?.band;
    const coloredSatelliteData = getColoredSatelliteDataFromService(band);
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(coloredSatelliteData);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed due to Server error!" });
  }
}

router.get("/", getColoredSatelliteData);

module.exports = router;
