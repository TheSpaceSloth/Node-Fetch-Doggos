const fs = require('fs');
const fetch = require('node-fetch');

const generateRandomStrings = (length=12)=>Math.random().toString(20).substr(2, length)

function fetchDoggos() {
  console.log('starting to fetch!')
  fetch('https://dog.ceo/api/breeds/image/random', {
    "method": "GET",
    headers: {'Content-Type': 'application/json'}
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(doggoData) {
    download(doggoData.message).then(r => console.log(r))
    async function download(url) {
      console.log('starting download')
      const response = await fetch(url);
      const buffer = await response.buffer();
      fs.writeFile(`${generateRandomStrings()}.jpg`, buffer, () =>
          console.log('finished downloading!'));
    }
  })
  .catch(function(err) {
    console.error(err);
  });
}

async function getDogs() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      fetchTodos()
    }, 2000 + ( i * 1000))
  }
}

getDogs().then(r => console.log(r))
