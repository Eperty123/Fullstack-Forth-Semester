const superagent = require("superagent")
const fs = require("fs")

// Callback hell
// fs.readFile(__dirname + "\\log.txt", "utf-8", (error, data) => {
//     superagent
//     .get("https://dog.ceo/api/breed/" + data.trim() + "/images/random")
//     .then(res =>{
//         console.log(res.body.message);

//         fs.writeFile("dog.img", res.body.message, err => {
//             if(err) return console.log(err);
//             console.log("Bam");

//         });
//     })
//     .end((err, res) => {
//         if(err) return console.log(err);
//         console.log(res.body.message);

//         fs.writeFile("dog.img", res.body.message, err => {
//             if(err) return console.log(err);
//             console.log("Bam");

//         });
//     });

//     .catch(err =>console.log(new Error(err.message)))
// });

// Promises
const readFilePro = (file) => {
    // Executer function
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf-8", (err, data) => {
            if(err) reject(err);
            resolve(data);
        })
    })
}

const writeFilePro = (file, content) => {
    // Executer function
    return new Promise((resolve, reject) => {
        fs.writeFile(file, content, err => {
            if(err) reject(err);
            resolve(content)
        });
    })
}

// readFilePro(__dirname + "\\log.txt")
//     .then(data =>
//         superagent
//         .get("https://dog.ceo/api/breed/" + data.trim() + "/images/random")
//         .then(res => writeFilePro("dog.img", res.body.message))
//     )

const getDogPics = async () => {

    try {
        const data = await readFilePro(__dirname + "\\log.txt");
        const res1 = await superagent.get("https://dog.ceo/api/breed/" + data.trim() + "/images/random");
        const res2 = await superagent.get("https://dog.ceo/api/breed/" + data.trim() + "/images/random");
        const res3 = await superagent.get("https://dog.ceo/api/breed/" + data.trim() + "/images/random");

        const all = Promise.all([res1, res2, res3]);
        const images = (await all).map(el => el.body.message);
        console.log(images);

    // const text = await writeFilePro("dog1.img", res.body.message);
    // console.log(text);
    }
    catch(e) {
        throw new Error(e.message);
    }
}

getDogPics();