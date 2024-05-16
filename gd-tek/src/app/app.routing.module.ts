import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: MainComponent},  // Default route
  {path: 'main', component: MainComponent}  // Main route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
