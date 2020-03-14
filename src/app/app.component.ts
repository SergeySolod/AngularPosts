import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    inputValue = ''

    constructor() {
    }

    onInput(event: KeyboardEvent) {
        this.inputValue = (<HTMLInputElement>event.target).value
    }

    onClick() {
        console.log('Click!')
    }

    onBlur(str: string) {
        this.inputValue = str
    }
}
