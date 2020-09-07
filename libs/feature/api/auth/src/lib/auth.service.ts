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
import {async} from 'rxjs/internal/scheduler/async';

/**
 * Auth Service for firebase
 */
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	/**
	 * @interface{User} from User in data lib
	 */
	user$: Observable<User>;

	constructor(
		private afAuth: AngularFireAuth,
		private afstore: AngularFirestore,
		private router: Router
	) {
		/**
		 *  Get the auth state, then fetch the Firestore user document or return null
		 *  */
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

	/**
	 * Create the SignIn Async Function that returns a promise
	 */
	async EmailSignIn(email: string, password: string) {
		try {
			const credential = await this.afAuth.signInWithEmailAndPassword(
				email,
				password
			);
			this.updateUserData(credential.user);
			this.router.navigate(['dashboard']);
		} catch (error) {
			// log error here
		}
	}

	async signOut() {
		try {
			await this.afAuth.signOut();
			this.router.navigate(['/']);
		} catch (error) {
			// log error here
		}
	}

	private updateUserData(user) {
		const userRef: AngularFirestoreDocument<User> = this.afstore.doc(
			`users/${user.uid}`
		);

		const data = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL,
		};

		return userRef.set(data, {merge: true});
	}
}
