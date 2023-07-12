/** Command-line tool to generate Markov text. */
const fs = require("fs");
const { MarkovMachine } = require("./markov");
const argumentss = process.argv;
const axios = require('axios');


const generateText = (text) => {
  const mm = new MarkovMachine(text);
  console.log(mm.makeText());
};

const makeText = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log(`cant read ${data} because ${err}`);
      process.exit(1)
    } else {
        console.log(generateText(data))
    }
  });
};


async function getUrlText (url) {
    let resp;
    
    try {
        response = await axios.get(url)
    } catch (error) {
        console.error(`Cannot read data from file because ${error}`);
        process.exit(1)
    }
    generateText(response.data)
}

if(argumentss[2] === "file") {
    makeText(argumentss[3])
} else if (argumentss[2] === "url") {
    getUrlText(argumentss[3])
}