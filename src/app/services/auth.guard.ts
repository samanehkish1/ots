import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad {
    constructor(private authService: AuthService,
                private router: Router) {
    }

    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authService.userIsAuthenticate) {
            this.router.navigateByUrl('/auth').then(r => console.log(r));
        }
        return this.authService.userIsAuthenticate;
    }
}
