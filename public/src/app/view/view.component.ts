import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: String;
  thisAuthor;
  thisVote;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => (this.id = params['id']));
    let author = this._httpService.getAuthor(this.id).subscribe(data => {
      console.log(data);
      this.thisAuthor = data['data'];
    })
  }

  voteUp(quoteId) {
    let voted = this._httpService.voteQuote(this.thisAuthor._id,
      { "id": quoteId, "voteVal": 1 }).subscribe(data => {
        this.thisAuthor = data['data'];
      });
  }

  voteDown(quoteId) {
    let voted = this._httpService.voteQuote(this.thisAuthor._id,
      { "id": quoteId, "voteVal": -1 }).subscribe(data => {
        this.thisAuthor = data['data'];
      });
  }

  delete(quoteId: String) {
    let deletequote = this._httpService.deleteQuote(this.thisAuthor._id,
      quoteId)
      .subscribe(data => {
        this.thisAuthor = data['data'];
      });
  }

  // redirectToView() {
  //   this._router.navigate(['/view/' + this.id]);
  // }

}

