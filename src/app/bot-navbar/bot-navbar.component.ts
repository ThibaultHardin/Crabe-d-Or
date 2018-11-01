import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bot-navbar',
    templateUrl: './bot-navbar.component.html',
    styleUrls: ['./bot-navbar.component.css']
})
export class BotNavbarComponent implements OnInit {

    showContacter = false;
    showAPropos = false;

    constructor() {}

    ngOnInit() {
    }

    switchShowContacter() {
        this.showContacter = !this.showContacter;
        this.showAPropos = false;
    }

    switchShowAPropos() {
        this.showAPropos = !this.showAPropos;
        this.showContacter = false;
    }
}
