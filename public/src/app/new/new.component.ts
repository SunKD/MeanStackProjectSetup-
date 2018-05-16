
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
  message;
  errors;
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
      this.message = data;
      // if (data['message'] !== 'error') {
      //   this._router.navigate(['/authors']);
      // } else {
      //   this.errors = data['errors']['errors']['name']['message'];
      //   console.log(data['errors']['errors']['name']['message']);
      // }
    })
    this._router.navigate(['/']);
  }
}
