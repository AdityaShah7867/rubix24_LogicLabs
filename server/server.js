const express = require('express');
const { dbConnect } = require('./utils/dbConnect');
const studentRoutes = require('./routes/student.routes');
const mentorRoutes = require('./routes/mentor.routes');

const cors = require('cors');

const { v4: uuidv4 } = require('uuid');


require('dotenv').config();


const app = express();


const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {

  await dbConnect();

  app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
  });
}


app.use('/api/v1/student', studentRoutes);
app.use('/api/v1/mentor', mentorRoutes);


app.get('/api/v1/connection/status', (req, res) => {
  try {
    const status = 'connected';
    res.status(200).json({ status });
  } catch (error) {
    res.status(500).json({ error: 'Unable to determine connection status' });
  }
});

startServer();
