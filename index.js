const puppeteer = require("puppeteer");

function delay (time){
    return new Promise(function(resolve){
        setTimeout(resolve, time);
    });
}

(async function main(){
    try {
         
        const browser = await puppeteer.launch({ headless: false});
        const page = await browser.newPage();
        await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36")
        
        //acessa o site
        await page.goto("https://web.whatsapp.com/");


        //searches person by title
        await page.waitForSelector("._8nE1Y"); //inserir a classe
        await delay(5000);

        //escreva para qual contato que enviar amesagen
        const contactName = "Tatá PE";
        await page.click(`span[title='${contactName}']`);
        await page.waitForSelector("._3Uu1_")

        const editor = await page.$("div[tabindex='-1']");
        await editor.focus();
        
        const amountOfMessagens= 10;

        for(var i=0; i < amountOfMessagens; i++){

            await page.evaluate(() => {

                const message = "test $%'";
                document.execCommand("inserttext", false, message);

            });

            await page.click("span[data-testid='send']");
            await delay(5000);
        }

        
    } catch (e) {

        console.error("erro mine", e)
        
    }
})();


















/* const puppeteer = require("puppeteer");

(async function main(){
    try {
         
        const browser = await puppeteer.launch({ headless: false});
        const page = await browser.newPage();
        await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36")
        
        //acessa o site
        await page.goto("https://web.whatsapp.com/");


        //searches person by title
        await page.waitForSelector("._8nE1Y"); //inserir a classe
        await delay(5000);

        //escreva para qual contato que enviar amesagen
        const contactName = "Tatá PE";
        await page.click(`span[title='${contactName}']`);
        await page.waitForSelector("._3Uu1_")

        const editor = await page.$("div[tabindex='-1']");
        await editor.focus();
        
        const amountOfMessagens= 50;

        for(var i=0; i < amountOfMessagens; i++){

            await page.evaluate(() => {

                const message = "Meu bot";
                document.execCommand("inserttext", false, message);

            });

            await page.click("span[data-testid='send']");
        }

        
    } catch (e) {

        console.error("erro mine", e)
        
    }
})();


function delay (time){
    return new Promise(function(resolve){
        setTimeout(resolve, time);

    });
} */