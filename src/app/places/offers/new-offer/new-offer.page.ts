import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PlacesService} from '../../../services/places.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  newOffer: FormGroup;
  //   apiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZkMzM2ZGEzZDVmNTE2MzVmYjQ0ODgwNTI2NWVmMGM2ZDdjZDFiYmI4MTVhNTJmNDZkZjJmZTAyYWFmOWFmMDdjMWIxMmJiYTZiYzlmZGQwIn0.eyJhdWQiOiI2MzcwIiwianRpIjoiZmQzMzZkYTNkNWY1MTYzNWZiNDQ4ODA1MjY1ZWYwYzZkN2NkMWJiYjgxNWE1MmY0NmRmMmZlMDJhYWY5YWYwN2MxYjEyYmJhNmJjOWZkZDAiLCJpYXQiOjE1NzA1MTA4NjgsIm5iZiI6MTU3MDUxMDg2OCwiZXhwIjoxNTczMDE2NDY4LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.iiQSCK4SWmSEVidHYgSl7WUYWOmshL342HL8b9re1pRsgnRlEqB4STmA-orjbmrp3vzkNjCMC--AKifOM3lCSTACau1mYCuvn7wM3QYdFq2qttEr1aTgv31X42tojayol2_JyWPnyhfd0N07bxy7fFo_6Z6drx9137iBfx5-gIv8tiZnBDf6Ich1HLkRpYxG_i0OlnGHnhlMVG-HMzJeMJcb7TMwV1XJURG0PrxS0wH0N6lvFQMLPVT9YScBLnikJv_k2ZLxxaNjalVErIWwGmsN9RJ8N-DfOGnuz6-b0irw8p-sHo8z6ftDeNlqiwFX_bAwRgxYWV6gkIL8ZSeRew';
  // center: Array<number> = [51.367918, 35.712706];

  constructor(private placeService: PlacesService) {
    this.newOffer = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      dateFrom: new FormControl('', Validators.required),
      dateTo: new FormControl('', Validators.required)
    });
  }
  ngOnInit() {
  }

    onCreateOffer() {
      const body = {
        title: this.newOffer.value.title,
        description: this.newOffer.value.description,
        price: this.newOffer.value.price,
        dateFrom: this.newOffer.value.dateFrom,
        dateTo: this.newOffer.value.dateTo,
      };
      this.placeService.addOfferData(body).subscribe(data => {
        console.log(data);
      });
    }
}
