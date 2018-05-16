import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  
  constructor(private _http: HttpClient) { 
    this.getAuthors();
  }

  getAuthors(){
    return this._http.get('/authors');
  }

  getAuthor(id: String) {
    return this._http.get('/authors/' + id);
  }

  voteQuote(id: String,  quote){
    console.log(id)
    console.log(quote)
    return this._http.post('/quotes/'+ id, quote);
  }

  addAuthor(newAuthor) {
    return this._http.post('/authors', newAuthor);
  }

  updateAuthor(updateInfo, id: String) {
    return this._http.put('/authors/' + id, updateInfo);
  }

  deleteAuthor(id: String) {
    return this._http.delete('/authors/' + id);
  }

  addNewQuote(id: String, newQuote){
    console.log(id);
    console.log(newQuote)
    return this._http.post('/authors/' + id, newQuote);
  }

  deleteQuote(id: String, delquote:String) {
    console.log(delquote, "this should be quote id")
    console.log(id)
    return this._http.delete('/quotes/' + id +"/"+ delquote);
  }

}
