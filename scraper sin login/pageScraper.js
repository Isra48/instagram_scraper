const storage = require('./firebase')
const cloudinary = require('cloudinary')
cloudinary.config({ 
    cloud_name: 'israignitesting', 
    api_key: '212623764458432', 
    api_secret: '87rC5Of0R2vQCcu9k6YhbLEZqOg' 
  });





const imageGenerator = (data) =>{
    const scraperObject = {
        async scraper(browser){
            let page = await browser.newPage();
            const selector = 'body';

            await page.evaluate(([selector, data]) =>{
                let dom = document.querySelector(selector);
                dom.innerHTML =` <div id="banner1" style="display: flex; justify-content:center; align-items:center; width: 600px; background-color: #f2f2f2; height: 300px;  margin-left:auto; margin-right:auto;"> 

                <div style="width:50%; height: 100%;">
                    <img style="width: 100%; height: 100%; background-size: contain; background-repeat: no-repeat;" src="http://img.freepik.com/free-psd/digital-marketing-agency-corporate-social-media-post-template_202595-525.jpg?w=826&t=st=1661193374~exp=1661193974~hmac=e67bcf732cfa5c6cf7908b98825bbd1784b37f1929004b03e40a1ec86fc7186e" />
        
                </div>
            <div style="background-color: #0067a0 ; width:50%; height: 100%; color:#fff ; display: flex; justify-content: center; align-items: center;flex-direction: column;">
                <p style="padding: 0em 2em 0em 2em; font-size: 1.5em;font-family: 'Montserrat', sans-serif;">${data.description}<span><br>#Cuponera</span></p>
        
                <a style="background-color:#b6e2ec; padding: .5em 3.5em; color: #333; text-decoration: none; border-radius: 6px; font-weight: bold; font-family: 'Montserrat', sans-serif;" href="#">
                    Chécalo aquí
                </a>
                
        
            </div>
            
            
            </div> 
            
            <div style="margin-top: 3em ;">
            </div>


    <div id="banner2" style=" display: flex; flex-direction: column; justify-content:center; align-items:center;width: 300px; background-color: #f2f2f2; height: 600px;  margin-left:auto; margin-right:auto;"> 

        <div style="width:100%; height: 50%;">
            <div style=" background-image: url(http://img.freepik.com/free-psd/digital-marketing-agency-corporate-social-media-post-template_202595-525.jpg?w=826&t=st=1661193374~exp=1661193974~hmac=e67bcf732cfa5c6cf7908b98825bbd1784b37f1929004b03e40a1ec86fc7186e); width: 100%; height: 100%; background-size: contain; background-repeat: no-repeat;">

            </div>

        </div>
    
    

    <div style="background-color: #0067a0  ; width:100%; height: 50%; color:#fff ; display: flex; justify-content: center; align-items: center;flex-direction: column;">
        <p style="padding: 0em 2em 0em 2em; font-size: 1.5em; font-family: 'Montserrat'">${data.description}<span><br>#Cuponera</span></p>

        <a style="background-color:#b6e2ec; padding: .5em 3.5em; color: #333; text-decoration: none; border-radius: 6px; font-weight: bold; font-family: 'Montserrat'" href="#">
            Chécalo aquí
        </a>
        

    </div>
    
    
    </div>
            
            
            `
            
        
        }, [selector, data] );
        const element = await page.$('body');
        let url = await page.$eval('img', el => el.src);


            let imgSrc ="";
            setTimeout(async ()=>{
                const screenshot =await element.screenshot({path: 'newpic2.png',
                encoding: 'buffer'
 

                
            
            });
         
            cloudinary.v2.uploader.upload("./newpic2.png",
                { public_id: "ola_test" }, 
                function(error, result) {console.log(result.url)
                    imgSrc = result.url;
             
                     });
        
      

                
            },7000)

            console.log('ola');
            console.log(imgSrc);

       



         
        
           


           


        //const storageRef = ref(storage);
        //const subida = ref(storage, 'newpic.jpg');





        }
    }


    return scraperObject
}

module.exports = imageGenerator