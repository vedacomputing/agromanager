import {Component, OnInit} from '@angular/core';
import {AuthService} from '@agromanager/feature/api/auth';

@Component({
	selector: 'agromanager-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	constructor(public auth: AuthService) {}

	ngOnInit(): void {}
}
