import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PopupComponent } from './home/popup/popup.component';
import { InternshipComponent } from './internship/internship.component';


import { StudyAbroadComponent } from './study-abroad/study-abroad.component';
import { MapComponent } from './study-abroad/map/map.component';
import { UniversityComponent } from './study-abroad/university/university.component';
import { UniversityGeneralComponent } from './study-abroad/university/university-general/university-general.component';
import { UniversityConsiderComponent } from './study-abroad/university/university-consider/university-consider.component';
import { UniversityExperiencesComponent } from './study-abroad/university/university-experiences/university-experiences.component';
// tslint:disable-next-line:max-line-length
import { UniversityExperienceDetailComponent } from './study-abroad/university/university-experience-detail/university-experience-detail.component';
import { UniversityCoursesComponent } from './study-abroad/university/university-courses/university-courses.component';
import { UniversityCourseDetailComponent } from './study-abroad/university/university-course-detail/university-course-detail.component';


import { ProfileComponent } from './profile/profile.component';
import { ProfileUserComponent } from './profile/profile-user/profile-user.component';
import { ProfileApplicationComponent } from './profile/profile-application/profile-application.component';
import { ProfileContactComponent } from './profile/profile-contact/profile-contact.component';
import { ProfileProgressComponent } from './profile/profile-progress/profile-progress.component';



/**
 * Das App Routing Module ist die Grundlage für sämtliches Routing in dieser Angular App (https://angular.io/tutorial/toh-pt5).
 * Unter data sind jeweils nur die Daten für die Breadcrumbs gespeihert.
 */
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
  data: {
    breadcrumbs: 'Home'
  } },
  { path: 'popup', component: PopupComponent,
  data: {
    breadcrumbs: 'Popup'
  } },
  { path: 'internship', component: InternshipComponent,
  data: {
    breadcrumbs: 'Internship'
   } },
  { path: 'studyAbroad', component: StudyAbroadComponent,
  data: {
    breadcrumbs: 'Study Abroad'
  },
    children: [
      { path: '', redirectTo: '/studyAbroad/map', pathMatch: 'full' },
      { path: 'map', component: MapComponent },
      { path: ':id', component: UniversityComponent,
        children: [
          { path: 'general', component: UniversityGeneralComponent,
          data: {
            breadcrumbs: 'General'
          } },
          { path: 'consider', component: UniversityConsiderComponent,
          data: {
            breadcrumbs: 'Consider'
          } },
          { path: 'experiences', component: UniversityExperiencesComponent,
          data: {
            breadcrumbs: 'Experiences'
          } },
          { path: 'experiences-detail', component: UniversityExperienceDetailComponent,
          data: {
            breadcrumbs: 'Experiences Detail'
          } },
          { path: 'courses', component: UniversityCoursesComponent,
          data: {
            breadcrumbs: 'Courses'
          } },
          { path: 'course-detail', component: UniversityCourseDetailComponent,
          data: {
            breadcrumbs: 'Course Detail'
          } }
        ]
      }
    ]
  },
  { path: 'profile', component: ProfileComponent,
  data: {
    breadcrumbs: 'Profile'
  },
  children: [
      { path: '', redirectTo: '/profile/user', pathMatch: 'full' },
      { path: 'user', component: ProfileUserComponent,
      data: {
        breadcrumbs: 'User'
       } },
      { path: 'application', component: ProfileApplicationComponent,
      data: {
        breadcrumbs: 'Application'
       } },
       { path: 'progress', component: ProfileProgressComponent,
      data: {
        breadcrumbs: 'Progress'
       } },
      { path: 'contact', component: ProfileContactComponent,
      data: {
        breadcrumbs: 'Contact'
       }}
  ]


}
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
