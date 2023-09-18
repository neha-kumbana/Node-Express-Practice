const { readFile,writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

//we can run this code without using util package also but u need to add .promises for require('fs')
const start = async() => {
    try{
        const first = await readFile('./content/first.txt','utf8')
        const second = await readFile('./content/second.txt','utf8')
        await writeFile('./content/result-mind-grenade.txt',
        `This is awesome : ${first} ${second}`,{flag :'a'})
        console.log(first);
        console.log(second);
    }catch(error){
        console.log(error);
    } 
}
start()

//----------------------------------------------------------------------------------
//reading a writing to a file using util package
// const start = async() => {
//     try{
//         const first = await readFilePromise('./content/first.txt','utf8')
//         const second = await readFilePromise('./content/second.txt','utf8')
//         await writeFilePromise('./content/result-mind-grenade.txt',
//         `This is awesome : ${first} ${second}`)
//         console.log(first);
//         console.log(second);
//     }catch(error){
//         console.log(error);
//     } 
// }
// start()

//---------------------------------------------------------------------------------

//reading a file using promise
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path,'utf8', (err,data) => {
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data);
//             }
//         })
//     })
// }


//  getText('./content/first.txt')
//  .then((result) => console.log(result))
//  .catch((err) => console.log(err))