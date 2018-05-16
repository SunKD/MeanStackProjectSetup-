import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {
  id;
  newQuote: any;
  thisAuthor;
  quoteaddAuthor;
  message = "";
  errors = { quote: "" };
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => (this.id = params['id']));
    console.log(this.id);
    console.log("Please printTTTT!")
    this.newQuote = { quote: ""}
  }

  onQuoteSubmit(){
    console.log(this.id);
    let nQuote = this._httpService.addNewQuote(this.id, this.newQuote).subscribe(data=>{
      console.log("you are adding new quote" + data);
      this.newQuote = data['data'];
      this.message = data["message"];
      if(data['message'] === "Success"){
        this.message = this.newQuote.quote + "added successfully!";
        this._router.navigate(['/view']);
      }else{
        if (data['error'].errors['quote']) {
          this.errors.quote = data['error'].errors['quote'];
        }
      }
    })
    this.newQuote = {quote: ""};
  }


  
}
