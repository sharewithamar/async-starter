const fs = require('fs');
//const http = require('http');
const superagent = require('superagent');

const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find the file 😒');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject(`could not write file 😢`);
      resolve('Success😁');
    });
  });
};
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed:${data}`);
    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);
    await writeFilePro('dog-img.txt', res.body.message);
    console.log(`Random dog image saved to file`);
  } catch (err) {
      
    console.log(err);
    throw(err)
  }
  return '2:READY 🐶🐶🐶🐶'
};
(async()=>{
    try{
        const x = await getDogPic()
        console.log(x);
    }    
    catch (err)
    {
        console.log('ERROR💣');
    }
})()

/* console.log('1: will get dog pics' );
 getDogPic().then(x=> {
     console.log(x);
      console.log('3: Done  getting dog pics' );
 }).catch(err => {
     console.log('ERROR💣');
 }) */
 
 
/* readFilePro(`${__dirname}/dog.txt`)
  .then(result => {
    return superagent.get(`https://dog.ceo/api/breed/${result}/images/random`)
  }).then(res => {
      return  writeFilePro('dog-img.txt', res.body.message)
      }).then(data => {
        console.log(data);
      }).catch(err => {
    if (err) {
      return console.log(err.message);
    } 
  }); */
