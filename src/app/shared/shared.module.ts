import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './components/slider/slider.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FlashMessagesModule } from 'angular2-flash-messages';
// import {HttpClient, HttpClientModule} from '@angular/common/http';
 import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
// import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// // AoT requires an exported function for factories
// export function HttpLoaderFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoader(httpClient);
// }

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FlashMessagesModule.forRoot(),
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    SliderComponent,
    FlashMessagesModule,
    TranslateModule
  ]
})
export class SharedModule { }
