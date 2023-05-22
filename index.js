const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user')
const app = express();
const uri = "mongodb+srv://adityasharanmern:Aditya1234@statscube.g9mejye.mongodb.net/test";
app.use(cors());
app.use(
    express.json({ limit: "50mb" }),
    express.urlencoded({
        extended: true,
        limit: "50mb",
    })
);

//connect to database
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log(" DATABASE CONNECTED"))
    .catch((err) => console.error("Unable to connect"))

mongoose.connection.on("error", function (error) {
    console.log(error)
});

mongoose.connection.on("open", function () {
    console.log("Connected to MongoDB database.")
});



// Set up routes
app.use('/user', userRoutes);


// Start the server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}`)
);
