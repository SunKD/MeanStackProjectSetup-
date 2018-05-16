import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  editAuthor;
  thisAuthor;
  message = "";
  errors = { name: "" };
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => (this.id = params['id']));
    this.getEditAuthor(this.id);
    this.editAuthor = { name: "" };
  }

  getEditAuthor(id) {
    let editing = this._httpService.getAuthor(this.id);
    editing.subscribe(data => {
      this.editAuthor = data['data'];
      console.log(data);
    })
    // this._httpService.getAuthor(id).subscribe(data=>{
    //   this.editAuthor = data;
    // })
  }

  onSubmit(id) {
    console.log(this.editAuthor)
    let update = this._httpService.updateAuthor(this.editAuthor, id);
    update.subscribe(data => {
      console.log("submited form")
      console.log(data);
      this.message = data["message"];
      if (data['message'] === "Success") {
        this.message = this.editAuthor.name + "added updated!";
        this._router.navigate(['/']);
      } else {
        if (data['error'].errors['name']) {
          this.errors.name = data['error'].errors['name'];
        }
      }
    })
  }


}
