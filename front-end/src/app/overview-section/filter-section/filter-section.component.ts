import { Component } from '@angular/core';
import { ApplicationState } from '../../store/application-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SelectFilterCuisineAction, SelectFilterNeighborhoodAction } from '../../store/actions';

@Component({
  selector: 'filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})
export class FilterSectionComponent {

  cuisines$: Observable<String[]>; 
  neighborhoods$: Observable<String[]>;

  constructor(private store: Store<ApplicationState>) {
    
    this.cuisines$ = this.store.select(state => state.dataState.cuisines);
    this.neighborhoods$ = this.store.select(state => state.dataState.neighborhoods);

   }

  onSelectCuisine(cuisine: string){
    this.store.dispatch(new SelectFilterCuisineAction(cuisine));
  }

  onSelectNeighborhood(neighborhood: string){
    this.store.dispatch(new SelectFilterNeighborhoodAction(neighborhood));
  }
  

}
