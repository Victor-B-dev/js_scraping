const puppeteer = require("puppeteer");

const url = "https://books.toscrape.com/catalogue/category/books/science-fiction_16/index.html"; // scraping specifically the science fiction page

async function getGenre(){
  try{
    const browser = await puppeteer.launch({
      headless: false, // launch browser w/ GUI browser remaining open to see
      defaultViewport: false, // by setting it to false, it loads the entire page, you can also set it to a specific value
      // userDataDir:"./tmp" userDataDir allows you to specify a directory to store brower's user data - useful for cookies/local storage/cache etc - e.g. do not need to run successive logins each time code is ran which may trigger unintentional blocks
    }); 
    const page = await browser.newPage(); // launch new tab
    await page.goto(url);
    await browser.close();

  } catch (err){
    console.log(err);
  }
}

getGenre();