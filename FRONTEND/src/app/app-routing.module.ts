import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';

const routes: Routes=[
    {
        path: '',
        component: LoginComponentComponent,
      },
      {
        path:'admin/home',
        component: AdminHomePageComponent
      }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }