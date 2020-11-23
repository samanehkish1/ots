import { Component, OnInit } from '@angular/core';
import {Place} from '../../model/place.model';
import {PlacesService} from '../../services/places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  public loadedPlaces: Place[];
  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placeService.getPlaces();
  }

    onFilterUpdate($event: CustomEvent) {
      console.log(event);
    }
}
