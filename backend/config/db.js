import mongose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongose.connect(process.env.MONGOO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
