import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '@agromanager/data';

import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {
	AngularFirestore,
	AngularFirestoreDocument,
} from '@angular/fire/firestore';

import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	user$: Observable<User>;

	constructor(
		private afAuth: AngularFireAuth,
		private afstore: AngularFirestore,
		private router: Router
	) {
		// Get the auth state, then fetch the Firestore user document or return null
		this.user$ = this.afAuth.authState.pipe(
			switchMap((user) => {
				// Logged in
				if (user) {
					return this.afstore.doc<User>(`users/${user.uid}`).valueChanges();
				} else {
					// Logged out
					return of(null);
				}
			})
		);
	}
}
