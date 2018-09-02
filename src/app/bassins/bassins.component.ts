import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bassins',
  templateUrl: './bassins.component.html',
  styleUrls: ['./bassins.component.css']
})
export class BassinsComponent implements OnInit {

  images = [
    {id: 1, src: "../../assets/bassins/1_Panneaux_A.jpg"},
    {id: 2, src: "../../assets/bassins/2_Panneaux_B.jpg"},
    {id: 3, src: "../../assets/bassins/3_Panneaux_CDE.jpg"},
    {id: 4, src: "../../assets/bassins/4_Panneaux_F.jpg"},
  ];

  constructor() { }

  ngOnInit() {
  }

  activeSliderId;

  cycleToSlide(photo) {
    this.activeSliderId = "ngb-slide-" + (photo.id - 1);
  }
}
