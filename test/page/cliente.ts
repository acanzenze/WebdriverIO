
export default class Cliente{
    get linkFormulario (){return $('[id="showFormLink"]')};

    constructor(){
    }

    async abrirFormulario(){
        const url = "C:/Users/Alexandre Canzenze/Documents/WebDriverIO Test Automation/test/index.html"
        await browser.url(url)
        await this.linkFormulario.click();
    }
}