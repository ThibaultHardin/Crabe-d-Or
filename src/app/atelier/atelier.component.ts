import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrls: ['./atelier.component.css']
})
export class AtelierComponent implements OnInit {

  title = "Crabe d'Or";
  showCard = false;

  constructor() { }

  ngOnInit() {
  }

  public displayCards(e) {
    // this.showCard = !this.showCard;
    console.log("Click en [x, y]: [" + e.offsetX + ", " + e.offsetY + "]");
  }
}
