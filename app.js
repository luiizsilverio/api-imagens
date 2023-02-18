const express = require("express");
require("dotenv").config();
require("./db");

const app = express();

const imageRouter = require("./routes/image");

app.use("/images", imageRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`API-Imagens rodando na porta ${port}`);
})
