import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

const routes: Routes = [
  {
    path:'', component:Form1Component,pathMatch:'full'
  },
  {
    path:'form1', component:Form1Component
  },
  {
    path:'form2', component:Form2Component
  },
  {
    path:'**', component:Form1Component,pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

