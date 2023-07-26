import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './component/table/table.component';
import { TableLineComponent } from './component/table-line/table-line.component';
import { ProductService } from './services/product/products.service';
import { HeaderComponent } from './component/header/header.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { ProductsViewComponent } from './views/products-view/products-view.component';
import { SingleProductViewComponent } from './views/single-product-view/single-product-view.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { ProfilViewComponent } from './views/profil-view/profil-view.component';
import { AddProductViewComponent } from './views/add-product-view/add-product-view.component';
import { EditProductViewComponent } from './views/edit-product-view/edit-product-view.component';
import { UserService } from './services/user/user.service';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableLineComponent,
    HeaderComponent,
    AuthViewComponent,
    ProductsViewComponent,
    SingleProductViewComponent,
    ErrorViewComponent,
    ProfilViewComponent,
    AddProductViewComponent,
    EditProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [AuthGuardService,AuthService,ProductService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
