import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { map, take, tap } from "rxjs/operators";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router, Router) {}

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
       return this.authService.user.pipe(take(1), map(user => {
        return !!user;
       }), tap(isAuth => {
        if (!isAuth) {
            this.router.navigate(['/auth']);
        }
       }));
    }
}