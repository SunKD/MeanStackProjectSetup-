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

  addAuthor(newAuthor) {
    return this._http.post('/authors', newAuthor);
  }

  updateAuthor(updateInfo, id: String) {
    return this._http.put('/authors/' + id, updateInfo);
  }

  deleteAuthor(id: String) {
    return this._http.delete('/authors/' + id);
  }

}
