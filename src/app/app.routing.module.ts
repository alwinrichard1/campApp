import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** INCLUDE PATH IN ROUTES */
const routes: Routes = [
    // { path: '', component: DashboardComponent },
    // { path: 'dashboard', component: DashboardComponent },
    // { path: 'login', component: LoginComponent },
    // { path: 'users', component: UserComponent },
    // { path: 'survey/launchSurvey', component: LaunchSurveyComponent },
    // { path: 'survey/surveyOverview', component: SurveyOverviewComponent },
    // { path: 'survey/surveyResult', component: SurveyResultComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }

/**ADD COMPONENTS IN routingComponents */
export const routingComponents = [
    // DashboardComponent, LoginComponent, LaunchSurveyComponent, SurveyOverviewComponent, SurveyResultComponent,
    // UserComponent
];
