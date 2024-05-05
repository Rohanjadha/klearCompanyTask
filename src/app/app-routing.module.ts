import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LogformComponent } from './pages/logform/logform.component';

const routes: Routes = [
  {
    path:'layout',component:LayoutComponent
  },
  {
    path:'',component:LogformComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
