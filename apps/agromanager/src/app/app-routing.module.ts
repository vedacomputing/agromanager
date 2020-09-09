import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'; // CLI imports router

import {AuthGuard} from '@agromanager/feature/api/auth';

import {FeatureModulesDashboardModule} from '@agromanager/feature/modules/dashboard';

/**
 * Route module
 */
export const APP_ROUTES: Routes = [
	{
		path: 'dashboard',
		pathMatch: 'full',
		canActivate: [AuthGuard],
		component: FeatureModulesDashboardModule,
	},
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
];

// configures NgModule imports and exports
@NgModule({
	imports: [RouterModule.forRoot(APP_ROUTES, {initialNavigation: 'enabled'})],
	exports: [RouterModule],
})
export class AppRoutingModule {}
