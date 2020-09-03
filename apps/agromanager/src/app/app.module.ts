import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';

import {firebaseConfig} from '../environments/firebase';
import {AngularFireModule} from '@angular/fire';

import {FlexLayoutModule} from '@angular/flex-layout';

import {UiKitsMainModule} from '@agromanager/ui-kits/main';
import {from} from 'rxjs';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		UiKitsMainModule,
		FlexLayoutModule,
		AngularFireModule.initializeApp(firebaseConfig),
		RouterModule.forRoot(
			[
				{
					path: '',
					loadChildren: () =>
						import('@agromanager/feature/lazy/home').then(
							(module) => module.FeatureLazyHomeModule
						),
				},
				{
					path: 'login',
					loadChildren: () =>
						import('@agromanager/feature/lazy/login').then(
							(module) => module.FeatureLazyLoginModule
						),
				},
				{
					path: 'about',
					loadChildren: () =>
						import('@agromanager/feature/lazy/about').then(
							(module) => module.FeatureLazyAboutModule
						),
				},
				{
					path: 'help',
					loadChildren: () =>
						import('@agromanager/feature/lazy/help').then(
							(module) => module.FeatureLazyHelpModule
						),
				},
				{
					path: 'settings',
					loadChildren: () =>
						import('@agromanager/feature/lazy/settings').then(
							(module) => module.FeatureLazySettingsModule
						),
				},
				{
					path: 'profile',
					loadChildren: () =>
						import('@agromanager/feature/lazy/profile').then(
							(module) => module.FeatureLazyProfileModule
						),
				},
			],
			{initialNavigation: 'enabled'}
		),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
