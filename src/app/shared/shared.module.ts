import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UtilitiesService } from './services/utilities/utilities.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, PageNotFoundComponent],
  providers: [UtilitiesService],
  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {

    return {
      ngModule: SharedModule,
      providers: [UtilitiesService]
    };

  }

}
