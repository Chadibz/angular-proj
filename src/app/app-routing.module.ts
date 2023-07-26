import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsViewComponent } from './views/products-view/products-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { SingleProductViewComponent } from './views/single-product-view/single-product-view.component';

const routes: Routes = [
 
  {path: 'auth',component: AuthViewComponent},
  {path: 'products',canActivate:[AuthGuardService], component: ProductsViewComponent},
  {path: 'profil',canActivate:[AuthGuardService], component: ProductsViewComponent},
  {path: 'product/:id',canActivate:[AuthGuardService], component: SingleProductViewComponent},
  {path: 'product/new',canActivate:[AuthGuardService], component: SingleProductViewComponent},
  {path: '',canActivate:[AuthGuardService], component: ProductsViewComponent},
  {path: 'not-found', component: ErrorViewComponent},
  {path: '**', redirectTo:'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
