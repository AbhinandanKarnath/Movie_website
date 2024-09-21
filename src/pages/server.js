const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/userAuth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));


const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("users", UserSchema);


app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    
    const newUser = new User({ email, password });
    await newUser.save();

    console.log("User registered successfully:", newUser);
    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    console.error("Error during registration process:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Login route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log("Email provided:", email);
    console.log("User found in database:", user);

    if (!user) {
      console.log("User not found.");
      return res.status(400).json({ error: "User not found" });
    }

    
    if (password !== user.password) {
      console.log(`Provided password: ${password}, Stored password: ${user.password}`);
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, "your_jwt_secret", { expiresIn: "1h" });
    console.log("Login successful, JWT token generated.");
    res.json({ token });
  } catch (error) {
    console.error("Error during login process:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.get("/", (req, res) => {
  res.send("Server is running");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
