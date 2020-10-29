import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search-modal',
    loadChildren: () => import('./components/search-modal/search-modal.module').then( m => m.SearchModalPageModule)
  },
  {
    path: 'user-modal',
    loadChildren: () => import('./components/user-modal/user-modal.module').then( m => m.UserModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
