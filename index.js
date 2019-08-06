const fs = require('fs');
//const http = require('http');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`,(err,data)=>{
   // console.log(`Breed: ${data}`)
   superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).then()
   .end((err,res) =>{
       //https://dog.ceo/api/breed/hound/images
        if(err)
        {
           return console.log(err.message)
        }
   console.log(res.body.message);
    fs.writeFile('dog-img.txt', res.body.message, err =>{
        console.log('random dog image saved to the file');
    })
   })
})

