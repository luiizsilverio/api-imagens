const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

mongoose.set("strictQuery", true);

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jnijzrd.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("BD conectado com sucesso.");
}

main().catch((err) => console.log(err));

module.exports = main;
