import {Injectable} from '@angular/core';
import {Place} from '../model/place.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {
    private places: Place[] = [
        new Place(1, 'Tehran', 'Tehran is big city', '../../assets/places/3225385.jpg', 25000),
        new Place(2, 'New york', 'New york is big city', '../../assets/places/148.jpg', 35000),
        new Place(3, 'Netherlands', 'Netherlands is big city', '../../assets/places/68530_fullimage_leiden_canals.jpg', 55000),
    ];

    constructor(private http: HttpClient) {
    }

    getPlaces() {
        return [...this.places];
    }

    getPlaceById(placeId: number) {
        return {...this.places.find(p => p.id === placeId)};
    }

    addOfferData(body): Observable<any> {
        return this.http.post<any>('https://ionic-2-5299d.firebaseio.com/offer-bookings.json', body);
    }

    fetchPlaces() {
        return this.http.get<{ [key: string]: any }>('https://ionic-2-5299d.firebaseio.com/offer-bookings.json')
            .pipe(map(resDate => {
                const places = [];
                for (const key in resDate) {
                    if (resDate.hasOwnProperty(key)) {
                        places.push(new Place (
                           key,
                           resDate[key].title,
                           resDate[key].description,
                           resDate[key].price,
                           new Date (resDate[key].dateFrom),
                        ));
                    }
                }
                return places;
            }));
    }
}
