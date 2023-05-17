const gdal = require("gdal-async");

function convertTifFileToPng(tifFilePath, pngFilePath) {
  const dataset = gdal.open(tifFilePath);
  gdal.translate(pngFilePath, dataset);
}

module.exports = { convertTifFileToPng };
