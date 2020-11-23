import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlacesService} from '../../../services/places.service';
import {NavController} from '@ionic/angular';
import {Place} from '../../../model/place.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  public place: Place;
  public editOffer: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
              private placeService: PlacesService,
              private navCtrl: NavController) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      } else {
        this.place = this.placeService.getPlaceById(parseInt(paramMap.get('placeId')));
      }
    });
    this.editOffer = new FormGroup ({
      title: new FormControl(this.place.title, Validators.required),
      description: new FormControl(this.place.description, Validators.required),
    });
  }

}
