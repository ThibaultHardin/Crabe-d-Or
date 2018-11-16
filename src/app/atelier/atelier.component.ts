import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-atelier',
    templateUrl: './atelier.component.html',
    styleUrls: ['./atelier.component.css']
})
export class AtelierComponent implements OnInit {

    showChaise = false;
    sourceChaiseFolder = '../../assets/SW_TTT/';
    sourceChaiseExt = '.jpg';
    sourceChaiseA = '';
    sourceChaiseB = '';

    constructor() { }

    ngOnInit() {
    }

    public hideAll() {
        this.showChaise = false;
    }

    public displayChaise() {
        const num = Math.floor(Math.random() * 11) + 1;
        this.sourceChaiseA = this.sourceChaiseFolder + 'A' + num + this.sourceChaiseExt;
        this.sourceChaiseB = this.sourceChaiseFolder + 'B' + num + this.sourceChaiseExt;
        this.showChaise = true;
    }
}
