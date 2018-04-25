import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot, Params } from '@angular/router';

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}

export class CustomRouterStateSerializer
    implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState;
        const queryParams = routerState.root.queryParams;
        let route = routerState.root;
        while(route.firstChild) {
            route = route.firstChild;
        }

        const params = route.params;
        return { url, params, queryParams };
    }

}