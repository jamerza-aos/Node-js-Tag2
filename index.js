const data = require('./data.json')
const fs = require('fs');
//console.log(data)


const data2 = data.map (data =>  data.id + " " + data. title + " " + data.description);
console.log(data2)

fs.writeFile('blog1.txt', data2 , err => {
    if (err) throw err
    console.log("error") 
})
