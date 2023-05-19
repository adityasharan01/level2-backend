const app = require("./app");

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);


















// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors());

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// // Replace this with your own MongoDB connection string
// const MONGODB_URI = 'mongodb://localhost:27017/theme-preference';

// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
// });

// const userSchema = new mongoose.Schema({
//     username: String,
//     primaryColor: String,
//     email: String,
//     password: String,
// });

// const User = mongoose.model('User', userSchema);

// app.get('/api/user/:username', async (req, res) => {
//     try {
//         const user = await User.findOne({ username: req.params.username });
//         res.json(user);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Replace this with your own secret key
// const JWT_SECRET = 'your_jwt_secret_key';

// app.post('/api/login', async (req, res) => {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//         return res.status(401).json({ error: 'Invalid email or password' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//         return res.status(401).json({ error: 'Invalid email or password' });
//     }

//     const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
//         expiresIn: '1h',
//     });

//     res.json({ token, userId: user._id });
// });

// app.post('/api/register', async (req, res) => {
//     const { username, primaryColor, email, password } = req.body;

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//         return res.status(400).json({ error: 'Email already in use' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//         username,
//         primaryColor,
//         email,
//         password: hashedPassword,
//     });

//     await newUser.save();

//     res.status(201).json({ message: 'User created successfully' });
// });


// app.put('/api/user/:username', async (req, res) => {
//     try {
//         const user = await User.findOneAndUpdate(
//             { username: req.params.username },
//             { primaryColor: req.body.primaryColor },
//             { new: true }
//         );
//         res.json(user);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });