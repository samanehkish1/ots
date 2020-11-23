import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionSheetController, ModalController, NavController} from '@ionic/angular';
import {CreateBookingComponent} from '../../../bookings/create-booking/create-booking.component';
import {PlacesService} from '../../../services/places.service';
import {Place} from '../../../model/place.model';

@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
    public place: Place;

    constructor(private router: Router,
                private navCtrl: NavController,
                private modalCtrl: ModalController,
                private activatedRoute: ActivatedRoute,
                private placeService: PlacesService,
                private actionSheetCtrl: ActionSheetController) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('placeId')) {
                this.navCtrl.navigateBack('/places/tabs/discover').then(r => console.log(r));
                return;
            }
            this.place = this.placeService.getPlaceById(parseInt(paramMap.get('placeId')));
        });
    }

    onBookPlace() {
        // this.router.navigateByUrl('/places/tabs/discover').then(r => console.log(r));
        // this.navCtrl.navigateBack('/places/tabs/discover').then(r => console.log(r));

        this.actionSheetCtrl.create({
            header: ' Choose an action: ',
            buttons: [
                {
                    text: 'select date',
                    handler: () => {
                        this.openModal('select');
                    }
                },
                {
                    text: 'select random',
                    handler: () => {
                        this.openModal('random');
                    }
                },
                {
                    text: 'cancel',
                    role: 'cancel'
                }
            ]
        }).then(actionSheetEl => {
            actionSheetEl.present();
        });
    }
    openModal(mode: 'select' | 'random') {
        console.log(mode);
        this.modalCtrl.create({
            component: CreateBookingComponent,
            componentProps: {selectedPlace: this.place}
        }).then(modalEl => {
            modalEl.present();
            return modalEl.onDidDismiss();
        }).then((resultData) => {
            console.log(resultData);
            if (resultData.role === 'confirmation') {
                console.log('this is place booked');
            }
        });
    }
}
