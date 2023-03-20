const express = require('express');
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
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

app.use((req, res, next)=>{
    const error = new Error(`wewe there is no method for this path ${req.originalUrl}`)
    res.status(404)
    next(error)
})
app.use((error,req, res, next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    console.log(statusCode);
    res.status(res.statusCode)
    return res.json({
        message : error.message,
        stack : process.env.NODE_ENV === 'production' ? '🥞' : error.stack

    })
})


app.listen(port, () => console.log(`Listening on port ${port}...`));
