const authorize = (req,res,next) => {
    const {user} = req.query;
    if(user === 'neha'){
        req.user = {name:'neha',id:3}
        next()
    }
    else{
        res.status(404).send('Unauthorized')
    }
}

module.exports = authorize