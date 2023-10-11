const mongoose = require ("mongoose");
require("dotenv").config();

let URI = process.env.database_URI;

main()
.then(()=>console.log("The db connected successfully"))
.catch((err) => console.log(err));

async function main () {
  await mongoose.connect(URI)
};

module.exports =main();