import {Component, OnInit} from '@angular/core';
import {AuthService} from '@agromanager/feature/api/auth';

@Component({
	selector: 'agromanager-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
	constructor(private authService: AuthService) {}

	ngOnInit(): void {}
}
