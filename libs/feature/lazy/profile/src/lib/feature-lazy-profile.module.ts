import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ProfilePageComponent}
    ]),
  ],
  declarations: [ProfilePageComponent],
})
export class FeatureLazyProfileModule {}
