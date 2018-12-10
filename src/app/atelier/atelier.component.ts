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

    public displayAmazones() {
        const num = Math.floor(Math.random() * 11) + 1;
        this.sourceA = this.sourceAmazonesFolder + 'A' + num + this.sourceExt;
        this.sourceB = this.sourceAmazonesFolder + 'B' + num + this.sourceExt;
        this.showCard = true;
    }

    public displayPanier() {
        let num = Math.floor(Math.random() * 10) + 1;
        this.sourceB = this.sourcePanierFolder + 'B' + num + this.sourceExt;
        if (num > 8) {
            num = Math.floor(Math.random() * 7) + 1;
        }
        this.sourceA = this.sourcePanierFolder + 'A' + num + this.sourceExt;
        this.showCard = true;
    }

    public displayTana() {
        const num = Math.floor(Math.random() * 4) + 1;
        this.sourceA = this.sourceTanaFolder + 'A' + num + this.sourceExt;
        this.sourceB = this.sourceTanaFolder + 'B' + (num === 5 ? 4 : num) + this.sourceExt;
        this.showCard = true;
    }

    public displayCoffre() {
        const num = Math.floor(Math.random() * 4) + 1;
        this.sourceA = this.sourceCoffreFolder + 'A' + num + this.sourceExt;
        this.sourceB = this.sourceCoffreFolder + 'B' + num + this.sourceExt;
        this.showCard = true;
    }

    public displayGirafe() {
        const num = Math.floor(Math.random() * 11) + 1;
        this.sourceA = this.sourceGirafeFolder + 'A' + num + this.sourceExt;
        this.sourceB = this.sourceGirafeFolder + 'B' + num + this.sourceExt;
        this.showCard = true;
    }

    public displayTTT() {
        const num = Math.floor(Math.random() * 11) + 1;
        this.sourceA = this.sourceTTTFolder + 'A' + num + this.sourceExt;
        this.sourceB = this.sourceTTTFolder + 'B' + (num === 12 ? 11 : num) + this.sourceExt;
        this.showCard = true;
    }
}
