import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './components/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './components/home/home.module#HomePageModule' },
  { path: 'newlistbuy', loadChildren: './components/newlistbuy/newlistbuy.module#NewlistbuyPageModule' },
  { path: 'detailslistbuy/:id', loadChildren: './components/detailslistbuy/detailslistbuy.module#DetailslistbuyPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
