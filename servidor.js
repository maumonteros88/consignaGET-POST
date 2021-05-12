const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;
const INDEX = path.join(__dirname, "index.html");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile(INDEX);
});

app.post("/saludar", function (req, res) {
  const dato = req.body;
  res.send(`Hola ${dato.nombre} "${dato.apodo}" ${dato.apellido}`);
});

app.listen(PORT, function () {
  console.log(`Servidor iniciado en puerto ${PORT}...`);
});
