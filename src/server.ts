import mongoose from "mongoose";
import app from "./app";
import config from "./app/config"; 

async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    app.listen(config.port, () => {
      console.log(`vugu is running on port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed to connect to the database", error);
  }
}

main();
