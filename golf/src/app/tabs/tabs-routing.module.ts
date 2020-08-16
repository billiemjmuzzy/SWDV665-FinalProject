import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthPageModule)
      },
      {
        path: 'rules',
        loadChildren: () => import('../rules/rules.module').then(m => m.RulesPageModule)
      },
      {
        path: 'tournament',
        loadChildren: () => import('../tournament/tournament.module').then(m => m.TournamentPageModule)
      },
      {
        path: 'game',
        loadChildren: () => import('../game/game.module').then(m => m.GamePageModule)
      },
    
      {
        path: 'scorecard',
        loadChildren: () => import('../scorecard/scorecard.module').then(m => m.ScorecardPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/about',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/about',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
