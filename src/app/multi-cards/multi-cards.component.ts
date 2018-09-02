import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-cards',
  templateUrl: './multi-cards.component.html',
  styleUrls: ['./multi-cards.component.css']
})
export class MultiCardsComponent implements OnInit {

  photoA = "../../assets/creations/tana_1.jpg";
  photoB = "../../assets/creations/tana_2.jpg";

  constructor() { }

  ngOnInit() {
  }

}
