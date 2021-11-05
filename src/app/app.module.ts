import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyonePipe } from './companyone.pipe';
import { CompanytwoPipe } from './companytwo.pipe';
import { CustompipeComponent } from './custompipe/custompipe.component';
import{FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CompanyonePipe,
    CompanytwoPipe,
    CustompipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
