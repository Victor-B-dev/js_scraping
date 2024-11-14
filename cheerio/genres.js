const cheerio = require("cheerio");

const url = "https://books.toscrape.com/catalogue/category/books_1/index.html";

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
      return $(element).text();
    }).get();
    
    // please note that cheerio only works on static HTML of a page, anything that is dynamically generated will break it, so modern website built on react/etc will actually break

    console.log('Genres:', genres);
  }
  catch (err){
    console.error('Error in fetch or parse', err);
  }
}

getGenres();