import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamilaTesteComponent } from './camila-teste/camila-teste.component';

const routes: Routes = [
  {
    path:'camila',
    component:CamilaTesteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
