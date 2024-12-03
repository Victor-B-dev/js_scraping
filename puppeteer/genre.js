const puppeteer = require("puppeteer");

async function getGenre(){
  try{
    const browser = puppeteer.launch({headless: false}); // launch browser
    const page = await browser.newPage(); // launch new tab
    await page.goto(url);

  } catch (err){
    console.log(err);
  }
}

getGenre();