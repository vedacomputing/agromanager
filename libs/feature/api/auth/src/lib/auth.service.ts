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
	) {}
}
