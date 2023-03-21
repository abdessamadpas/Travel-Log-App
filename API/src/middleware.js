const notFound = (req, res, next)=>{
    const error = new Error(`wewe there is no method for this path ${req.originalUrl}`)
    res.status(404)
    next(error)
}

const handleError = (error,req, res, next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    console.log(statusCode);
    res.status(res.statusCode)
    return res.json({
        message : error.message,
        stack : process.env.NODE_ENV === 'production' ? '🥞' : error.stack

    })
}

module.exports={
    notFound,
    handleError,
}