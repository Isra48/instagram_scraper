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

        

        await page.waitForSelector('input.XTCLo');
        await page.type('input.XTCLo', 'samsclubmx');
        await page.waitForSelector('a.-qQT3');
        await page.click('a.-qQT3');
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
    
    const screenshot =  await element.screenshot({path: 'newpic.png'});

   



      

        

        return{
            url,
            screenshot,
            newString,
            hash,
        }
	}
}

module.exports = scraperObject;