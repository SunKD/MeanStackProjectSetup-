
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  authors;
  newAuthor: any;
  editAuthor;
  title = 'Quote Ranks';
  constructor(private _httpService: HttpService) { 
    // this.thirdtask = {title: ""} //when you dont want to use the *ngif
  }
  ngOnInit() {
    this.newAuthor = {name: ""};
    this.getAllAuthors();
  }

  getAllAuthors(){
    let authors = this._httpService.getAuthors().subscribe(data=>{
      console.log("get all author");
      console.log(data);
      this.authors = data;
    });

  }

  edit(id){
    let edit = this._httpService.getAuthor(id).subscribe(data=>{
      this.editAuthor = data;
    })
  }

  delete(id){
    let deleteAuthor = this._httpService.deleteAuthor(id).subscribe(data=>{
      console.log(data);
    });
    this.getAllAuthors()
  }
}
