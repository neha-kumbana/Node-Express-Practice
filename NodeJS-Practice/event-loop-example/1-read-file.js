const { readFile } = require('fs')

console.log('started a first task');
//check file path
readFile('./content/first.txt','utf-8',(err, result) => {
    if(err){
        console.log(err);
        return
    }else{
        console.log(result);
        console.log('completed the first task');
    }
})
console.log('starting the next task');