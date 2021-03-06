import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { CourseListComponent } from './components/store-app/course-list/course-list.component';
import { CourseComponent } from './components/store-app/course-list/course/course.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './components/store-app/course-list/course-list.component.service';
import { RouterModule } from '@angular/router';
import { SobreMimComponent } from './components/store-app/sobre-mim/sobre-mim.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CourseListComponent,
    CourseComponent,
    SobreMimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component:CourseListComponent
      },
      {
        path: 'sobremim', component:SobreMimComponent
      },
    ])
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
