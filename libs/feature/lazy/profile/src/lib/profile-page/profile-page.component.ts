import {Component, OnInit} from '@angular/core';
import {AuthService} from '@agromanager/feature/api/auth';

@Component({
	selector: 'agromanager-profile-page',
	templateUrl: './profile-page.component.html',
	styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
	constructor(public auth: AuthService) {}

	ngOnInit(): void {}
}
