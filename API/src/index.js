const express = require('express');
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const middleware = require('./middleware')
const app = express();
const port = process.env.PORT || 1337;


// middleware
app.use(morgan('common'))
app.use(cors({
    origin : 'https:localhost:3000'
}))
app.use(helmet())
app.get('/', (req, res) => {
    res.send('Hello to my backend API');
});

app.use(middleware.notFound)
app.use(middleware.handleError)


app.listen(port, () => console.log(`Listening on port ${port}...`));
