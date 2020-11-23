import {Component, OnInit} from '@angular/core';
import {Place} from '../../model/place.model';
import {PlacesService} from '../../services/places.service';
import {IonItemSliding} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.page.html',
    styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
    public offers: any;

    constructor(private placeService: PlacesService,
                private router: Router) {
    }

    ngOnInit() {
        // this.offers = this.placeService.getPlaces();
    }
    ionViewWillEnter() {
        this.placeService.fetchPlaces().subscribe(res => {
            console.log(res);
            this.offers = res;
        });
    }
    onEdit(id: number, slidingItem: IonItemSliding) {
        slidingItem.close();
        console.log('editing: ', id);
        this.router.navigate([`/places/tabs/offers/edit/${id}`]);
    }
}
