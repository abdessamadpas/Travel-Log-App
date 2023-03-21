const {Router} = require('express')
const router = Router();
const LogEntry = require('../models/LogEntry')
router.get('/', async (req, res)=>{
    try {
    const logs = await LogEntry.find()
    res.json(logs)
    } catch (error) {
        next(error)
    }
    
})
router.post('/', async(req, res, next)=>{
    try {
        const log = new LogEntry(req.body)
        console.log(log);
        const createdEntry = await log.save()
        res.json(createdEntry)  
    } catch (error) {
        if(error.name === 'ValidationError'){
            res.status(422)
        }
        next(error)
    }
   
})

module.exports = router