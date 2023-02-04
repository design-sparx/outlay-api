const express = require('express');
const cors = require('cors');
const dbConnect = require('./dbConnect');

const app = express();
const PORT = process.env.PORT || 8800;

// add routes
const userRoute = require('./routes/userRoute');
const transactionRoute = require('./routes/transactionRoute');

// enables destructuring object from client
app.use(express.json());
app.use(cors());

// register routes
app.use('/api/users/', userRoute);
app.use('/api/transactions/', transactionRoute);

app.get("/", (req, res) => res.send('Hello world.'));

app.listen(PORT, () => console.log(`Backend connected listening on port ${PORT}`))
