
const imageGenerator = require('./pageScraper');
async function scrapeAll(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
		let lastImage = {
			url: './newpic.png',
			description: 'Hola soy la quote',

		}
		await imageGenerator(lastImage).scraper(browser);
		
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}



module.exports = (browserInstance) => scrapeAll(browserInstance)