import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-atelier',
    templateUrl: './atelier.component.html',
    styleUrls: ['./atelier.component.css']
})
export class AtelierComponent implements OnInit {

    showCard = false;
    sourceGirafeFolder = '../../assets/SW_Les_Girafes_de_Mada/';
    sourcePanierFolder = '../../assets/SW_l\'IERSPMM/';
    sourceTanaFolder = '../../assets/SW_Antananarivo/';
    sourceCoffreFolder = '../../assets/SW_Coffre_et_de╠üsir/';
    sourceAmazonesFolder = '../../assets/SW_33_amazones/';
    sourceTTTFolder = '../../assets/SW_TTT/';
    sourceExt = '.jpg';
    sourceA = '';
    sourceB = '';

    constructor() { }

    ngOnInit() {
    }

    public hideAll() {
        this.showCard = false;
    }

    public display(type) {
        switch (type) {
            case 'Amazones':
                this.displayAmazones();
                break;
            case 'Panier':
                this.displayPanier();
                break;
            case 'Tana':
                this.displayTana();
                break;
            case 'Coffre':
                this.displayCoffre();
                break;
            case 'Girafe':
                this.displayGirafe();
                break;
            case 'TTT':
                this.displayTTT();
                break;
        }
        this.showCard = true;
    }

    public displayAmazones() {
        let num = Math.floor(Math.random() * 5) + 1;
        this.sourceA = this.sourceAmazonesFolder + 'A' + num + this.sourceExt;
        num = Math.floor(Math.random() * 7) + 1;
        this.sourceB = this.sourceAmazonesFolder + 'B' + num + this.sourceExt;
    }

    public displayPanier() {
        let num = Math.floor(Math.random() * 7) + 1;
        this.sourceA = this.sourcePanierFolder + 'A' + num + this.sourceExt;
        num = Math.floor(Math.random() * 10) + 1;
        this.sourceB = this.sourcePanierFolder + 'B' + num + this.sourceExt;
    }

    public displayTana() {
        let num = Math.floor(Math.random() * 5) + 1;
        this.sourceA = this.sourceTanaFolder + 'A' + num + this.sourceExt;
        num = Math.floor(Math.random() * 3) + 1;
        this.sourceB = this.sourceTanaFolder + 'B' + num + this.sourceExt;
    }

    public displayCoffre() {
        let num = Math.floor(Math.random() * 3) + 1;
        this.sourceA = this.sourceCoffreFolder + 'A' + num + this.sourceExt;
        num = Math.floor(Math.random() * 4) + 1;
        this.sourceB = this.sourceCoffreFolder + 'B' + num + this.sourceExt;
    }

    public displayGirafe() {
        let num = Math.floor(Math.random() * 11) + 1;
        this.sourceA = this.sourceGirafeFolder + 'A' + num + this.sourceExt;
        num = Math.floor(Math.random() * 7) + 1;
        this.sourceB = this.sourceGirafeFolder + 'B' + num + this.sourceExt;
    }

    public displayTTT() {
        let num = Math.floor(Math.random() * 11) + 1;
        this.sourceA = this.sourceTTTFolder + 'A' + num + this.sourceExt;
        num = Math.floor(Math.random() * 10) + 1;
        this.sourceB = this.sourceTTTFolder + 'B' + num + this.sourceExt;
    }
}
