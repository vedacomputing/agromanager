import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';

import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
	imports: [
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatButtonModule,
		MatListModule,
		MatDividerModule,
		MatTableModule,
		MatProgressSpinnerModule,
		MatPaginatorModule,
		FlexLayoutModule,
		RouterModule,
	],
	declarations: [HeaderComponent, FooterComponent, NavbarComponent],
	exports: [HeaderComponent, FooterComponent, NavbarComponent],
})
export class UiKitsMainModule {}
