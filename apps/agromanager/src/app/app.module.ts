import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {firebaseDEVConfig} from '../environments/firebase'; //using DEV project
import {AngularFireModule} from '@angular/fire';

import {FlexLayoutModule} from '@angular/flex-layout';

import {UiKitsMainModule} from '@agromanager/ui-kits/main';
import {from} from 'rxjs';
import {FeatureModulesAnimalsModule} from '@agromanager/feature/modules/animals';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		UiKitsMainModule,
		FlexLayoutModule,
		AngularFireModule.initializeApp(firebaseDEVConfig),
		AppRoutingModule,
		FeatureModulesAnimalsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
