import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HelpPageComponent } from './help-page/help-page.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: HelpPageComponent}
    ]),
  ],
  declarations: [HelpPageComponent],
})
export class FeatureLazyHelpModule {}
