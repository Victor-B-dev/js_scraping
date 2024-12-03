const puppeteer = require("puppeteer");

const url = "https://books.toscrape.com/catalogue/category/books/science-fiction_16/index.html";

async function getGenre(){
  try{
    const browser = await puppeteer.launch({headless: false}); // launch browser w/out showing the GUI browser opening
    const page = await browser.newPage(); // launch new tab
    await page.goto(url);
    await browser.close();

  } catch (err){
    console.log(err);
  }
}

getGenre();