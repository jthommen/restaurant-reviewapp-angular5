import { Routes } from '@angular/router';
import { OverviewSectionComponent } from './overview-section/overview-section.component';
import { DetailSectionComponent } from './detail-section/detail-section.component';

export const routes: Routes = [
    {
        path: '',
        component: OverviewSectionComponent
    },
    {
        path: 'details/:id',
        component: DetailSectionComponent
    }
];