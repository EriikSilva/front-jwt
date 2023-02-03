import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,UrlTree } from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable({
    providedIn:'root'
})

export class IsLoggeddGuard implements CanActivate{

    constructor(
        private authService:AuthService,
        private router:Router
        ){}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
         
        return this.authService.naoTaLogado$
        .pipe(
            tap(naoTaLogado => {
                //redirecionar
                if(!naoTaLogado && this.router.url === "/"){
                    this.router.navigate(['/dashboard'])
                }
            })
        )

    }

}