const path = require("path");
const fs = require("fs");
const { convertTifFileToPng } = require("../imagesUtils");

const satelliteDataDirPath = path.resolve(
  __dirname,
  "../" + (process.env.SATELLITE_DATA_DIR || "satellite data")
);

const satelliteDataCacheDirPath = path.resolve(
  __dirname,
  "../" + (process.env.SATELLITE_DATA_CACHE_DIR || "satellite data cache")
);

function getColoredSatelliteData(band) {
  const bandPngFilePath = path.join(satelliteDataCacheDirPath, band + ".png");
  if (!fs.existsSync(bandPngFilePath)) {
    const bandTifFilePath = path.join(satelliteDataDirPath, band + ".tif");
    convertTifFileToPng(bandTifFilePath, bandPngFilePath);
  }
  return fs.readFileSync(bandPngFilePath);
}

module.exports = { getColoredSatelliteData };
