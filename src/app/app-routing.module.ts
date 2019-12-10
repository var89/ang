import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {CatalogComponent} from './catalog/catalog.component';
import {parseSelectorToR3Selector} from '@angular/compiler/src/core';
import {RegistrationFormComponent} from './registration-form/registration-form.component';


const routes: Routes = [
  {path: '', redirectTo: 'catalog', pathMatch: 'full'},
  {path: 'catalog', component: CatalogComponent},
  {path: 'register', component: RegistrationFormComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
