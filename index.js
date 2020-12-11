const fs = require('fs')

// fs.readFile('./data.json', 'utf8', (err, data) => {
//     if (err) throw err
//     // console.log(data);
//     // console.log(typeof (data));
//     const dataToObj = JSON.parse(data)
//     // console.log(typeof (dataToObj));
//     dataToObj.map(text => {
//         console.log(text);
//         let tempText = `
// ${text.id} - ${text.title}
// ${text.description}
// `
//         fs.appendFile('./blog.txt', tempText, err => {
//             if (err) throw err
//             console.log("Text appended");
//         })
//     })
// })



//////// 3-2 ///////
// if (fs.existsSync('./MyFunnyFolder')) {
//     // löschen
//     fs.rmdir('./MyFunnyFolder', err => {
//         if (err) throw err
//         console.log("Deleted");
//     })
// } else {
//     // erstellen
//     fs.mkdir('./MyFunnyFolder', (err) => {
//         if (err) throw err;
//         console.log("Created");
//     });
// }
// if (!fs.existsSync('./What')) {
//     fs.mkdir('./What', (err) => {
//         if (err) throw err;
//         console.log("Created");
//         fs.writeFile('./What/IsThis.txt', "data", (err) => {
//             if (err) throw err;
//             console.log('The file has been saved!');
//         });
//     });
// }
// if (fs.existsSync('./What')) {

// } else {
//     fs.mkdir('./What', (err) => {
//         if (err) {
//             err;
//         }
//         console.log("Created");
//         fs.writeFile('./What/IsThis.txt', "data", (err) => {
//             if (err) throw err;
//             console.log('The file has been saved!');
//         });
//     });
// }

const addToFile = (para) => {
    fs.mkdirSync('./something', { recursive: true })
    // fs.mkdir('./something', { recursive: true }, (err) => {
    //     if (err) throw err;
    //     console.log("Created");
    fs.appendFileSync('./something/text.txt', para + "\n");
    // fs.appendFile('./something/text.txt', para + "\n", 'utf8', (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    // });
    // });

}
addToFile("Some Text")
addToFile("Some Text more")
addToFile("Some Text and so on")