import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocketdexlistComponent } from './pocketdexlist/pocketdexlist.component';
import { PocketmonComponent } from './pocketmon/pocketmon.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'pocketdex', component:PocketdexlistComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'pocketmon/:id', component: PocketmonComponent},
  {path: '', pathMatch: 'full', redirectTo:'pocketdex'},
  {path: '**', pathMatch: 'full', redirectTo:'pocketdex'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
