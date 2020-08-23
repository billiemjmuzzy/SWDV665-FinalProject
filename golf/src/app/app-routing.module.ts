// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'tournament', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule) },
  {
    path: 'tournament',
    loadChildren: () => import('./tournament/tournament.module').then(m => m.TournamentPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'play',
    loadChildren: () => import('./play/play.module').then( m => m.PlayPageModule)
  },
  {
    path: 'scorecard',
    loadChildren: () => import('./scorecard/scorecard.module').then(m => m.ScorecardPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'rules',
    loadChildren: () => import('./rules/rules.module').then(m => m.RulesPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule),
    canLoad: [AuthGuard]
  },
  
  
 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
