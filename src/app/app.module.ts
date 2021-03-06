import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonutListComponent } from './donut-list/donut-list.component';
import { DevelopersComponent } from './developers/developers.component';
import { DonutViewComponent } from './donut-view/donut-view.component';
import { DeveloperViewComponent } from './developer-view/developer-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutListComponent,
    DevelopersComponent,
    DonutViewComponent,
    DeveloperViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
