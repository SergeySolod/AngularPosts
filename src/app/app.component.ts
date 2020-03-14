import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    img = 'https://ru.reactjs.org/logo-og.png'
    constructor() {
        setTimeout(() => {
            this.img = 'https://www.searchengines.ru/wp-content/uploads/2019/02/756150_c033_2.jpg'
        }, 5000)
    }
}
