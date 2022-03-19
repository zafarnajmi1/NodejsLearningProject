const { readFile } = require('fs');

const getTxt = (path) => {
    return new Promise((resolve , reject)=>{

        readFile(path,'utf8',(err,data) => {
            if (err) {
             reject(err)
            } else{
              console.log(data)
              resolve(data)
            }
        })
    })
}

//getTxt('./content/first.txt').then((result) => console.log(result)).catch((err) => console.log(err))

const start = async() => {
    try {
        const first = await getTxt('./content/first.txt');
        const second = await getTxt('./content/second.txt');
        console.log(first, second)
} catch(error) {
  console.log(error)
}
    }
    
start()