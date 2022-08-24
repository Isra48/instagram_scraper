const cloudinary = require('cloudinary')
cloudinary.config({ 
    cloud_name: 'israignitesting', 
    api_key: '212623764458432', 
    api_secret: '87rC5Of0R2vQCcu9k6YhbLEZqOg' 
  });



const imageGenerator = (data) =>{
 console.log(data)
    const scraperObject = {
        async scraper(browser){
            let page = await browser.newPage();
            const selector = 'body';
           

          
            await page.evaluate(([selector, data]) =>{
                let dom = document.querySelector(selector);
                dom.innerHTML =`
                <div id="banner1" style="display: flex; justify-content:center; align-items:center; width: 600px; background-color: #f2f2f2; height: 300px;  margin-left:auto; margin-right:auto;"> 
                <div style="width:50%; height: 100%;">
                    <div style=" background-image: url(${data.imgSrc}); width: 100%; height: 100%; background-size: contain; background-repeat: no-repeat;">
                    </div>
                </div>
            <div style="background-color: #0067a0 ; width:50%; height: 100%; color:#fff ; display: flex; justify-content: center; align-items: center;flex-direction: column;">
                <p style="padding: 0em 2em 0em 2em; font-size: 1.2em;font-family: 'Montserrat', sans-serif;">${data.newString}<span><br>${data.hash}</span></p>
                <a style="background-color:#b6e2ec; padding: .5em 3.5em; color: #333; text-decoration: none; border-radius: 6px; font-weight: bold; font-family: 'Montserrat', sans-serif;" href="#">
                    Chécalo aquí
                </a>
            </div>
            </div> 
            <div style="margin-top: 3em ;">
            </div>
    <div id="banner2" style=" display: flex; flex-direction: column; justify-content:center; align-items:center;width: 300px; background-color: #f2f2f2; height: 600px;  margin-left:auto; margin-right:auto;"> 
<div style="width:100%; height: 50%;">
            <div style=" background-image: url(${data.imgSrc}); width: 100%; height: 100%; background-size: contain; background-repeat: no-repeat;">
            </div>
        </div>
    <div style="background-color: #0067a0  ; width:100%; height: 50%; color:#fff ; display: flex; justify-content: center; align-items: center;flex-direction: column;">
        <p style="padding: 0em 2em 0em 2em; font-size: 1.2em; font-family: 'Montserrat', sans-serif;">${data.newString}<span><br>${data.hash}</span></p>

        <a style="background-color:#b6e2ec; padding: .5em 3.5em; color: #333; text-decoration: none; border-radius: 6px; font-weight: bold; font-family: 'Montserrat', sans-serif;" href="#">
            Chécalo aquí
        </a>
        

    </div>
    
    
    </div>
                
                
                
                
                
                ` }, [selector, data]);       
                await page.waitForSelector('#banner2');
                const element1 = await page.$('#banner1');
                const element2 = await page.$('#banner2');


                setTimeout(async()=>{
                const screenshotB1 = await element1.screenshot({path:'banner1.png',
            encoding: 'buffer'
 });
                const screenshotB2 = await element2.screenshot({path:'banner2.png',
        encoding: 'buffer'});

        
            await cloudinary.v2.uploader.upload("./banner1.png,",
            { public_id: "banner1_ss" }, 
            function(error, result) {console.log(result) }
            );
    
            await cloudinary.v2.uploader.upload("./banner2.png,",
            { public_id: "banner2_ss" }, 
            function(error, result) {console.log(result)});

        },10000)
       


        }
    }





    return scraperObject
}

module.exports = imageGenerator