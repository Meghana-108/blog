const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authorRoutes = require('./routes/authorRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://meghana:megh108@cluster0.opopwm4.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(authorRoutes);
app.use(blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
