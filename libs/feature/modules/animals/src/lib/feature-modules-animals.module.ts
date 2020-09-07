import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {RouterModule, Route} from '@angular/router';
import {AnimalsPageComponent} from './animals-page/animals-page.component';

// export const featureModulesAnimalsRoutes: Route[] = [];

@NgModule({
	imports: [CommonModule],
	declarations: [AnimalsPageComponent],
})
export class FeatureModulesAnimalsModule {}
