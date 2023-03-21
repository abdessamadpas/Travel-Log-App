const express = require('express');
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb');
require('dotenv').config()

const middleware = require('./middleware')
const logs = require('./routers/logs')

const port = process.env.PORT || 1337;
const MONGO_URL = process.env.MONGO_URL;
const ORIGIN_URL = process.env.ORIGIN_URL;

const app = express();
console.log(ORIGIN_URL);
mongoose.connect(MONGO_URL)
    .then(console.log('connected to dB'))
    .catch(error => middleware.handleError(error));

  
// middleware
app.use(morgan('common'))

app.use(helmet())
app.use(cors({
    origin : ORIGIN_URL
}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello to my backend API');
});
app.use('/api/log', logs)

app.use(middleware.notFound)
app.use(middleware.handleError)


app.listen(port, () => console.log(`Listening on port ${port}...`));
