
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newauthor;
  message = "";
  errors = { name: "" } ;
  
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newauthor= {name: ""};
  }

  onSubmit(){
    let addAuthor = this._httpService.addAuthor(this.newauthor).subscribe(data=>{
      console.log(data);
      console.log("New Author added");
      console.log("This is the message from data", data["message"]);
      this.message = data["message"];
      if(data['message'] === "Success"){
        this.message = this.newauthor.name + "added successfully!";
        this._router.navigate(['/']);
      }else{
        if (data['error'].errors['name']) {
          console.log("print this when error" ,data['error'])
          this.errors.name = data['error'].errors['name'];
        }
      }
      // if (data['message'] !== 'error') {
      //   this._router.navigate(['/authors']);
      // } else {
      //   this.errors = data['errors']['errors']['name']['message'];
      //   console.log(data['errors']['errors']['name']['message']);
      // }
    })
    
  }
}
