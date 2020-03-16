import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { AppRoutingModule } from './app-routing.module';
import { JobDetailComponent } from './job-detail/job-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsListComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
