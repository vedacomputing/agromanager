import {Injectable} from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router,
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {tap, map, take} from 'rxjs/operators';

/**
 * Authorization Guard for routes
 */
@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	/**
	 * Constructor for AuthGuard
	 * @param auth from AuthService to make sure user is logged in
	 * @param router from Router to navigate
	 */
	constructor(private auth: AuthService, private router: Router) {}

	/**
	 * This Guards the interface that requires an observavle to emit a boolean
	 * @param next
	 * @param state
	 */
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> {
		return this.auth.user$.pipe(
			take(1),
			map((user) => !!user),
			tap((loggedIn) => {
				if (!loggedIn) {
					console.log('acess denied');
					this.router.navigate(['/']);
				}
			})
		);
	}
}
