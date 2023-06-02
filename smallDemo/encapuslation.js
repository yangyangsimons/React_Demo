// Encapsulate an readfiles function
// function readFIles(url){
//     return new Promise((resolve, reject) => {
//         require('fs').readFile(url, (err,data) => {
//             if (err) {reject(err);}
//             resolve(data);
//         })
//     })
// }
// readFIles('index.html')
// .then(value => {
//     console.log(value.toString())
// }
// ,reason => {
//     console.log(reason);
// })
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = 123345
        resolve(data)
    }, 1000);
})
p.then(value => {
    console.log(`${value} 1111`);
    return new Promise(()=>{});
})
.then(value => {
    console.log(`${value} 2222`)
})
.catch(error => {
    console.log(error);
})