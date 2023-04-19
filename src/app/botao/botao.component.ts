import {Component, Output, EventEmitter } from "@angular/core"

@Component({
    selector:"app-botao",
    templateUrl:'./botao.component.html'
})

export class BotaoComponent{
   
    @Output()
    clickBotao = new EventEmitter()
    
    BotaoClick(): void{
        console.log(2+23)
        this.clickBotao.emit()
    }

    mouseover(): void{
        console.log(this.mouseover)
    }
}
