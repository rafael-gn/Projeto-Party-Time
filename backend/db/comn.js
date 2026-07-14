const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://rafaelgn066_db_user:5CERkLCTwMxuzHP@cluster0.6vjcfrw.mongodb.net/",
    );

    console.log("conectado ao banco");
  } catch (error) {
    console.log(`Erro ${error}`);
  }
}

module.exports = main;
