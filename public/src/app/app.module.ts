import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';//
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { QuoteNewComponent } from './quote-new/quote-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    EditComponent,
    PagenotfoundComponent,
    ListComponent,
    ViewComponent,
    QuoteNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
