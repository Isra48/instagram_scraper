const cloudinary = require('cloudinary')
cloudinary.config({ 
    cloud_name: 'israignitesting', 
    api_key: '212623764458432', 
    api_secret: '87rC5Of0R2vQCcu9k6YhbLEZqOg' 
  });



const scraperObject = {
	url: 'https://www.instagram.com/accounts/login/',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
        await page.waitForSelector('input[name="username"]')
        await page.type('input[name="username"]', 'israeligni');
        await page.type('input[name="password"]', '%&R4Z6G,YmsNM,4');
        await page.click('button[type="submit"]');

        

        await page.waitForSelector('._aauy');
        await page.type('._aauy', 'samsclubmx');
        await page.waitForSelector('._abm4');
        await page.click('div._abm4>a');
        await page.waitForSelector('article._aayp');
        let image = await page.$eval('div._aabd > a', el => el.href);
        await page.goto(image);
        await page.waitForSelector('div._aagv');
        let url = await page.$eval('div._aagv > img', el => el.src);
    
        let description = await page.$eval('span._aacl', el => el.innerHTML);
        let hash = await page.$eval('span._aacl > a', el => el.innerHTML);

        let indice = description.indexOf("<");
        let newString = description.substring(0, indice);

        await page.goto(url);
        await page.waitForSelector('img');
        const element = await page.$('img'); 
    

        let imgSrc ="";
   
        const screenshot =await element.screenshot({path: 'lastpost.png',
        encoding: 'buffer'
        });
    
    await cloudinary.v2.uploader.upload("./lastpost.png",
    { public_id: "instagram_ss" }, 
    function(error, result) {
        imgSrc = result.url;
 
         });
    

        return{
            url,
            imgSrc,
            newString,
            hash,
        }
	}
}

module.exports = scraperObject;