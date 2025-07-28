 require("dotenv").config();
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a base de datos
connectDB();

// Middlewares
app.use(cors());
app.use(compression());
app.use(express.json());

// Rutas
app.use("/api/usuario", require("./routes/usuarios"));

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
