import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    CursosComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RotasModule { }
