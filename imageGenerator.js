
const imageGenerator = (data) =>{
    const scraperObject = {
        async scraper(browser){
            let page = await browser.newPage();
            const selector = 'body';

            await page.evaluate(([selector, data]) =>{
                let dom = document.querySelector(selector);
                dom.innerHTML =`
                <div id="banner1" style="display: flex; justify-content:center; align-items:center; width: 600px; background-color: #f2f2f2; height: 300px;  margin-left:auto; margin-right:auto;"> 

                <div style="width:50%; height: 100%;">
                    <div style=" background-image: url(http://img.freepik.com/free-psd/digital-marketing-agency-corporate-social-media-post-template_202595-525.jpg?w=826&t=st=1661193374~exp=1661193974~hmac=e67bcf732cfa5c6cf7908b98825bbd1784b37f1929004b03e40a1ec86fc7186e); width: 100%; height: 100%; background-size: contain; background-repeat: no-repeat;">
        
                    </div>
        
                </div>
            <div style="background-color: #0067a0 ; width:50%; height: 100%; color:#fff ; display: flex; justify-content: center; align-items: center;flex-direction: column;">
                <p style="padding: 0em 2em 0em 2em; font-size: 1.5em;font-family: 'Montserrat', sans-serif;">${data.newString}<span><br>${data.hash}</span></p>
        
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
        <p style="padding: 0em 2em 0em 2em; font-size: 1.5em; font-family: 'Montserrat'">${data.newString}<span><br>${data.hash}</span></p>

        <a style="background-color:#b6e2ec; padding: .5em 3.5em; color: #333; text-decoration: none; border-radius: 6px; font-weight: bold; font-family: 'Montserrat'" href="#">
            Chécalo aquí
        </a>
        

    </div>
    
    
    </div>
                
                
                
                
                
                ` }, [selector, data]);
                console.log(data.url);
        }
    }
//<p>${data.newString}</p> <img src="newpic.png"> </img>

    return scraperObject
}

module.exports = imageGenerator