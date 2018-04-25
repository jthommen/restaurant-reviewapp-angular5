import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class RestaurantService {
    
    constructor(private http: HttpClient){
    }

    loadAllRestaurantData():Observable<any> {
        const  headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

        return this.http.get<any>('http://localhost:1337/restaurants', {headers});
    }

    loadRestaurantData(id:number) {
        const  headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

        return this.http.get<any>(`http://localhost:1337/restaurants/${id}`, {headers});
    }

    loadReviewData(id:number) {
        const  headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

        return this.http.get<any>(`http://localhost:1337/reviews/?restaurant_id=${id}`, {headers});
    }

}