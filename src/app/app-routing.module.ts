import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopersComponent } from './developers/developers.component';
import { DonutListComponent } from './donut-list/donut-list.component';

const routes: Routes = [
  {path: 'Donuts', component: DonutListComponent},
  {path: 'Developers', component: DevelopersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
