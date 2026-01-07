 require("dotenv").config();
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;
const auth = require("./middlewares/auth");
// Conexión a base de datos
connectDB();

// Middlewares
app.use(cors());
app.use(compression());
app.use(express.json());

app.use("/api/token", require("./routes/token"));
// Rutas
app.use("/api/usuario", auth, require("./routes/usuarios"));
app.use("/api/medidas", auth, require("./routes/medidas"));
app.use("/api/rutinas", auth, require("./routes/rutinas"));
app.use("/api/ejercicios", auth, require("./routes/ejercicios"));
app.use("/api/rutinasByUser", auth, require("./routes/rutinasByUser"));
app.use("/api/customers", auth, require("./routes/customers"));
app.use("/api/checkins", auth, require("./routes/checkins"));
app.use("/api/checkouts", auth, require("./routes/checkouts"));


// Inicio del servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
