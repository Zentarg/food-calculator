import { Routes } from '@angular/router';
import { DiaryComponent } from './features/diary/diary.component';
import { SettingsComponent } from './features/settings/settings.component';
import { StatisticsComponent } from './features/statistics/statistics.component';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'diary'
    },
    {
        path: 'diary',
        pathMatch: 'full',
        component: DiaryComponent
    },
    {
        path: 'settings',
        pathMatch: 'full',
        component: SettingsComponent
    },
    {
        path: 'statistics',
        pathMatch: 'full',
        component: StatisticsComponent
    }
];
