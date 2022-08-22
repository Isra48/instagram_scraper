const pageScraper = require('./pageScraper');
const imageGenerator = require('./imageGenerator')
async function scrapeAll(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
		let lastImage = await pageScraper.scraper(browser);	
		await imageGenerator(lastImage).scraper(browser);
		
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance)