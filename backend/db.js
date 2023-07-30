const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://akshatgtc:Akshat908070@cluster0.pdy7nhn.mongodb.net/ExpressEats?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("FoodItems").find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("FoodCategory").find({}).toArray();
    
    global.FoodCategory = foodCategory;
    global.FoodItems = fetched_data;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = mongoDB;
