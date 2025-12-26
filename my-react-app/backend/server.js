const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
dotenv.config();  //  done 
const app = express();  // done 
app.use(cors());  // done 
app.use(express.json()); // done 

connectDB();   // done 
app.use("/api/auth", require("./routes/auth"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
