const cheerio = require("cheerio");
const { readFileSync, writeFileSync } = require('fs');
const stringify = require('csv-stringify');

const url = "https://books.toscrape.com/index.html";

async function getGenres(){
  try {
    const response = await fetch(`${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const html = await response.text()
    const $ = cheerio.load(html); 
    // typically the converted info is stored as $ because it resembles jQuery, an older framework for HTML document traversal.

    const genres = $('.side_categories li a').map((index, element) => {
      return $(element).text().replace(/\s+/g, ' ').trim(); // regex to remove whitespace chars
    }).get();
    // returns an array of all the genres available on the website's main page
    // .get() converts the Jquery object (unintelligible list) into an regular JS array

    // take the genre and change into a csv string
    const csv = stringify.stringify(genres);
    // create a new file with the csv information - by default it will overwrite an existing file with the same name
    writeFileSync('genres.csv', csv);

    console.log('Genres:', genres);
  }
  catch (err){
    console.error('Error in fetch or parse', err);
  }
}

getGenres();