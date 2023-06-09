const express = require("express");
const path = require("path");
const coloredSatteliteDataRouter = require("./coloredSatelliteData/coloredSatelliteDataRouter");

const app = express();
const publicPath = path.join(__dirname, "..", "client/build");

app.use("/api/v1/coloredSatelliteData", coloredSatteliteDataRouter);

app.use(express.static(publicPath));
app.get("/", function (req, res) {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(process.env.PORT || 7070);
