import mongoose from "mongoose";

const connectDB = async () => {
  const connection = await mongoose.connect(
    "mongodb+srv://Suzan:od@143ml@cluster0.n7fis.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );
  console.log(`MongoDB Connected: ${connection.connection.host}`);
};

export default connectDB;
