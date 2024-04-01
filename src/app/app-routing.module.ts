import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FacultyDataComponent } from './components/faculty-data/faculty-data.component';
import { AddFacultyComponent } from './components/add-faculty/add-faculty.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'facultyData/:id', component: FacultyDataComponent},
  {path: 'UpdateFaculty/:id',component: AddFacultyComponent},
  {path: 'AddFaculty', component: AddFacultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
