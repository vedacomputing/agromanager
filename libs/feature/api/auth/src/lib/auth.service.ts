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

/**
 * Auth Service for firebase
 */
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	/**
	 * user Observable taken from interface of
	 * @interface user$ from User in data lib
	 */
	user$: Observable<User>;

	/**
	 * Constructor for the AuthService
	 * @param afAuth firebase authorization
	 * @param afstore firestore to pull document
	 * @param router router to navigate the user
	 */
	constructor(
		private afAuth: AngularFireAuth,
		private afstore: AngularFirestore,
		private router: Router
	) {
		/**
		 * Get the auth state, then fetch the Firestore user document or return null
		 */
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
	 * Register new User
	 * @param email email address of the user to SignIn from form
	 * @param password password of user to SignIn from form
	 */
	async RegisterUser(email: string, password: string) {
		try {
			const credential = await this.afAuth.createUserWithEmailAndPassword(
				email,
				password
			);
			this.updateUserData(credential.user);
			this.router.navigate(['dashboard']);
		} catch (error) {
			// log error here
		}
	}

	/**
	 * Create the SignIn Async Function that returns a promise
	 * @param email email address of the user to SignIn from form
	 * @param password password of user to SignIn from form
	 */
	async EmailSignIn(email: string, password: string) {
		try {
			const credential = await this.afAuth.signInWithEmailAndPassword(
				email,
				password
			);
			this.updateUserData(credential.user);
			this.router.navigate(['/dashboard']);
		} catch (error) {
			// log error here
		}
	}

	/**
	 * SignOut the User already logged in
	 */
	async signOut() {
		try {
			await this.afAuth.signOut();
			this.router.navigate(['/']);
		} catch (error) {
			// log error here
		}
	}

	/**
	 *  Updates the User Document on the Firestore
	 * @param user from SignIn information to get uid for user document
	 */
	private updateUserData(user) {
		const userRef: AngularFirestoreDocument<User> = this.afstore.doc(
			`users/${user.uid}`
		);

		const data = {
			uid: user.uid,
			email: user.email,
		};

		return userRef.set(data, {merge: true});
	}
}
