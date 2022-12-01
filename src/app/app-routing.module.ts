import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./feed/feed.component').then(c => c.FeedComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
