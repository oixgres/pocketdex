import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PocketdexlistComponent } from './pocketdexlist/pocketdexlist.component';
import { TopbarComponent } from './topbar/topbar.component';
import { PocketListComponent } from './pocket-list/pocket-list.component';

import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ProfileComponent } from './profile/profile.component';
import { PocketmonComponent } from './pocketmon/pocketmon.component';
import { TrainerComponent } from './trainer/trainer.component';
@NgModule({
  declarations: [
    AppComponent,
    PocketdexlistComponent,
    PocketListComponent,
    TopbarComponent,
    ProfileComponent,
    PocketmonComponent,
    TrainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCarouselModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
