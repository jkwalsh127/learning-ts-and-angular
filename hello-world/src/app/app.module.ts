import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [ // Adds all the components that are part of this module
    AppComponent, 
    CoursesComponent, 
    CourseComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
