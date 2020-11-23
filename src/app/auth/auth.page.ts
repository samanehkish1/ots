import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
    public isLogin = true;

  constructor(private authService: AuthService,
              private router: Router,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

    login() {
       this.authService.login();
       this.loadingCtrl.create({keyboardClose: true, message: 'loading...' }).then((loadingEl) => {
          loadingEl.present();
           this.router.navigateByUrl('/places/tabs/discover');
           loadingEl.dismiss();
       });
    }

    loginForm(form: NgForm) {
        console.log(form);
        this.login();
    }

    switchLogin() {
        this.isLogin = !this.isLogin;
    }
}
