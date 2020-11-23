import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {PlacesService} from '../../../services/places.service';
import {Place} from '../../../model/place.model';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  public place: Place;
  constructor(private activatedRoute: ActivatedRoute,
              private navCtrl: NavController,
              private placeService: PlacesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('places/tabs/offers').then(res => {console.log(res); });
        return;
      } else {
        this.place = this.placeService.getPlaceById(parseInt(paramMap.get('placeId')));
      }
    });
  }

}
