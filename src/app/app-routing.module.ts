import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JavaComponent } from './java/java.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';



const routes: Routes = [{ path: 'home', component: HomeComponent },
                        { path: 'java/:id', component: JavaComponent },
                        { path: 'topics/:id', component: TopicDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
