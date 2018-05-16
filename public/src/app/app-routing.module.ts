import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { QuoteNewComponent } from './quote-new/quote-new.component';


const routes: Routes = [
  { path: 'new', component: NewComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'newquote/:id', component: QuoteNewComponent },
  // use a colon and parameter name to include a parameter in the url
  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', component: ListComponent },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
