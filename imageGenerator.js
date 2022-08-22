const { url } = require("./pageScraper");

const imageGenerator = (data) =>{
    const scraperObject = {
        async scraper(browser){
            let page = await browser.newPage();
            const selector = 'body';

            await page.evaluate(([selector, data]) =>{
                let dom = document.querySelector(selector);
                dom.innerHTML =`<p>${data.newString}</p>` }, [selector, data]);
                console.log(data.url);
        }
    }


    return scraperObject
}

module.exports = imageGenerator