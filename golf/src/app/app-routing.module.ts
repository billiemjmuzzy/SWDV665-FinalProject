// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule) },
  { path: 'rules', loadChildren: () => import('./Rules/Rules.module').then(m => m.RulesPageModule) },
  { path: 'tournament', loadChildren: () => import('./tournament/tournament.module').then(m => m.TournamentPageModule) },
  { path: 'scorecard', loadChildren: () => import('./scorecard/scorecard.module').then(m => m.ScorecardPageModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
