const cheerio = require("cheerio");

const url = "https://books.toscrape.com/catalogue/category/books/science-fiction_16/index.html";

async function getGenre(){
  try {
    const response = await fetch(`${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const html = await response.text()
    const data = cheerio.load(html);
    const genre = data("h1").text();

    console.log('Genre:', genre)
  }
  catch (err){
    console.error('Error in fetch or parse', err);
  }
}

getGenre();