
const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt','utf8');
        await writeFile('./content/result-mind-generated.txt',`This Is Awesome : ${first} ${second}`,{flag:'a'})
        console.log(first, second)
} catch(error) {
  console.log(error)
}
    }
    
start()





// const getTxt = (path) => {
//     return new Promise((resolve , reject)=>{

//         readFile(path,'utf8',(err,data) => {
//             if (err) {
//              reject(err)
//             } else{
//               console.log(data)
//               resolve(data)
//             }
//         })
//     })
// }

//getTxt('./content/first.txt').then((result) => console.log(result)).catch((err) => console.log(err))
