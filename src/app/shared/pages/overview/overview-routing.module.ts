import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewPage } from './overview.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewPage,
    children:
    [
      {
        path: 'subjects',
        children: 
        [
          {
            path: '',
            loadChildren: () => import('./subjects/subjects.module').then( m => m.SubjectsPageModule),
          },
          {
            path:'add',
            loadChildren: () => import('./subjects/add-subject/add-subject.module').then(m=>m.AddSubjectPageModule)
          },
          {
            path:'edit/:id',
            loadChildren: () => import('./subjects/edit-subject/edit-subject.module').then(m=>m.EditSubjectPageModule)
          }
        ]
      },
      {
        path: 'gyik',
        children: 
        [
          {
            path: '',
            loadChildren: () => import('./gyik/gyik.module').then( m => m.GyikPageModule)
          }
        ]
      },
      {
        path: 'calculator',
        children: 
        [
          {
            path: '',
            loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
          }
        ]
      },
      {
        path: 'account',
        children: 
        [
          {
            path: '',
            loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
          }
        ]
      },
      {
        path: 'calendar',
        children: 
        [
          {
            path: '',
            loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
          },
          {
            path: 'add-event',
            loadChildren: () => import('./calendar/add-calendar/add-calendar.module').then( m => m.AddCalendarPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewPageRoutingModule {}
