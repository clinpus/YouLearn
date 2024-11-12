import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { LoginOKComponent } from './login-ok/login-ok.component';
import { LoginKOComponent } from './login-ko/login-ko.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path:'home', component:HomeComponent},
    { path:'login', component:LoginComponent},
    { path:'register', component:RegisterComponent},
    { path:'loginOK', component:LoginOKComponent},
    { path:'loginKO', component:LoginKOComponent},
    { path:'courses', component:CoursesComponent},
    { path:'instructors', component:InstructorsComponent},
    { path:'store', component:StoreComponent},
    { path:'about', component:AboutComponent},
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}