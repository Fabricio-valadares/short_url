import mongoose from "mongoose";

class MongooseConfig {
  public async configConnect() {
    try {
      await mongoose.connect("config_mongoose"); // url config mongoose

      console.log("connect mongoose true !");
    } catch (error) {
      console.log(error);
    }
  }
}

export { MongooseConfig };
