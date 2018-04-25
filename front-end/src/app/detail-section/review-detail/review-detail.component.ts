import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../../shared/model/restaurant';

@Component({
  selector: 'review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {

  @Input()
  restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }
  

}
