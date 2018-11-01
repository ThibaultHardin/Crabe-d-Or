import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-multi-cards',
    templateUrl: './multi-cards.component.html',
    styleUrls: ['./multi-cards.component.css']
})
export class MultiCardsComponent implements OnInit {

    @Input() sourceA: string = undefined;
    @Input() sourceB: string = undefined;

    photoA = "../../assets/creations/tana_1.jpg";
    photoB = "../../assets/creations/tana_2.jpg";

    constructor() { }

    ngOnInit() {
    }

}
