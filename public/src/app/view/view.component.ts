import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id;
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
        this.thisAuthor = data;
        this.redirectToView();
        this.getAuthor();
      });
  }

  voteDown(quoteId) {
    let voted = this._httpService.voteQuote(this.thisAuthor._id,
      { "id": quoteId, "voteVal": -1 }).subscribe(data => {
        console.log("got intot this function");
        this.thisAuthor = data;
        this.redirectToView();
        this.getAuthor();
      });
  }

  delete(quoteId: String) {
    let deletequote = this._httpService.deleteQuote(this.thisAuthor._id,
      quoteId)
      .subscribe(data => {
        this.thisAuthor = data;
        this.redirectToView();
        this.getAuthor();
      });
  }

  redirectToView() {
    this._router.navigate(['/view/' + this.id]);
  }

  getAuthor() {
    let author = this._httpService.getAuthor(this.id).subscribe(data => {
      console.log(data);
      this.thisAuthor = data['data'];
    })
  }
}

