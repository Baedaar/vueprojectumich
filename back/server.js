const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const { db } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
