import { Component } from '@angular/core';
import { ApplicationState } from '../../store/application-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { stateToFilterResultMarkerSelector } from './stateToFilterResultMarkerSelector';
import { MapMarkerVM } from './map-marker.vm';
import { Router } from '@angular/router';

@Component({
  selector: 'map-section',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent{

  lat: number = 40.722216;
  lng: number = -73.987501;
  zoom: number = 12;

  markerCoordinates$: Observable<MapMarkerVM[]>;

  constructor(
    private store: Store<ApplicationState>,
    private router: Router) { 

    this.markerCoordinates$ = store.select(stateToFilterResultMarkerSelector);
  }

  onMarkerClick(id) {
    this.router.navigate(['/details', id])
  }


}
