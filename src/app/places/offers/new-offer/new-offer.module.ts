import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewOfferPage } from './new-offer.page';
// import {NgxMapboxGLModule} from 'mapir-angular-component';

const routes: Routes = [
  {
    path: '',
    component: NewOfferPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        // NgxMapboxGLModule
    ],
  declarations: [NewOfferPage]
})
export class NewOfferPageModule {}
