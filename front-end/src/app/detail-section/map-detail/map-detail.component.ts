import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../../shared/model/restaurant';

@Component({
  selector: 'map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css']
})
export class MapDetailComponent implements OnInit {

  @Input()
  restaurant: Restaurant;
  zoom = 12;

  constructor() { }

  ngOnInit() {
  }

}
