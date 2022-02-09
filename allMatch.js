const request = require("request");
const cheerio = require("cheerio");

const psc=require('./scorecard');


function getAllMatchesLink(fullLink) {
    request(fullLink, cb2);
  
    function cb2(error, response, html) {
      if (error) {
        console.log(error);
      } else {
        extractAllMatchesLink(html);
      }
    }
  }
  function extractAllMatchesLink(html) {
    let $ = cheerio.load(html);
    let scoreCardEleArr = $('a[data-hover="Scorecard"]');
  
    for (let i = 0; i < scoreCardEleArr.length; i++) {
      let link = $(scoreCardEleArr[i]).attr("href");
      let fullLink = "https://www.espncricinfo.com" + link;
      console.log(fullLink);
      psc.PSC(fullLink);
    }
  }

  module.exports={
      getAllMatchesLink : getAllMatchesLink
  }