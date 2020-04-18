import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
   {
      path: '',
      loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule)
   },
   {
      path: 'products/:productId',
      loadChildren: () => import('src/app/product/product.module').then(m => m.ProductModule)
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
