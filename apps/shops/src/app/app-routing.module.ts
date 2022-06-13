import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './presentation/item-detail/item-detail.component';
import { ItemListComponent } from './presentation/item-list/item-list.component';

const routes: Routes = [
  {
    path: '',
    component: ItemListComponent
  },
  {
    path: 'items',
    component: ItemListComponent
  },
  {
    path: 'items/:id',
    component: ItemDetailComponent
  },
  // --------------------------
  // - ADD YOUR ROUTERS ABOVE -
  // --------------------------
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
