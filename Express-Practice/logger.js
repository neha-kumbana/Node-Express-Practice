//req => middleware => res
//middleware function
const logger = (req,res,next) => {
    const method =req.method;
    const url = req.url;
    const time = new Date().getFullYear()
    console.log(method, url, time);
    next()             //either u terminate or pass it to the next middleware by calling next()
}

module.exports = logger