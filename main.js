const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

const request = require("request");
const cheerio = require("cheerio");
const allMatch = require("./allMatch");
const fs=require('fs');
const path=require('path');

let iplPath=path.join(__dirname,"IPL");
dirCreator(iplPath);


request(url, cb);

function cb(error, response, html) {
  if (error) {
    console.log(error);
  } else {
    extractLink(html);
  }
}
function extractLink(html) {
  let $ = cheerio.load(html);
  let anchorElement = $('a[data-hover="View All Results"]');

  let link = anchorElement.attr("href");
  let fullLink = "https://www.espncricinfo.com" + link;
  console.log(fullLink);

  allMatch.getAllMatchesLink(fullLink);
}


function dirCreator(filePath){
if(fs.existsSync(filePath)==false){
  fs.mkdirSync(filePath);
}
}
