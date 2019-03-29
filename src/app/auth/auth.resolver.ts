import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthResolver implements Resolve<any> {
    constructor(private authService: AuthService){}

    resolve(route: ActivatedRouteSnapshot){
        return this.authService.getUserData();
    }
}