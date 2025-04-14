const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const problemRoutes = require('./routes/dsaRoutes.js');
const coreRoutes = require('./routes/coreRoutes.js');

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true }));
app.use(cors());

app.use('/dsaRoutes', problemRoutes);
app.use('/coreRoutes', coreRoutes);

const PORT = process.env.PORT || 5100;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running in PORT: ${PORT}`)))
    .catch((error) => console.log(error.message));