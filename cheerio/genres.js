const cheerio = require("cheerio");

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
      return $(element).text().replace(/\s+/g, ' ').trim();
    }).get();
    // returns an array of all the genres available on the website's main page

    console.log('Genres:', genres);
  }
  catch (err){
    console.error('Error in fetch or parse', err);
  }
}

getGenres();
