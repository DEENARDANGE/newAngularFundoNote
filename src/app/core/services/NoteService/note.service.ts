import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttputilService } from 'src/app/httputil.service';
import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes = [];
  titl: null
  discriptio: null
  public API = '//localhost:8080';
  constructor(private httpUtil: HttputilService) {
  }

  public getHeader() {
    var token = localStorage.getItem('token')
    const httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': token
      })
    };
    return httpheaders;
  }

  public getAll(): Observable<any> {
    var header = this.getHeader();
    return this.httpUtil.get(this.API + '/notes', header)

  }

  public save(note) {
    var token = localStorage.getItem('token'); 
    var header = this.getHeader();
    return this.httpUtil.postWithBody(this.API + '/note/' + token, note, header)
  }

  public delete(id) {
    var header = this.getHeader();
    return this.httpUtil.delete(this.API + '/note/' + id, header);
  }

  public updateNote(note, noteId) {
    var token = localStorage.getItem('token');
    return this.httpUtil.put(this.API + '/note', note, {
      params: {
        noteId: noteId,
        token: token
      }, observe: 'response'
    })
  }

  public doCollab(collabUser) {
    var token = localStorage.getItem('token');
    return this.httpUtil.put(this.API + '/add-collabarator/' + token, collabUser, {})
  }

  public removeCollab(collabUser) {
    var token = localStorage.getItem('token');
    return this.httpUtil.put(this.API + '/remove-collabarator/' + token, collabUser, {})
  }

  public uploadNoteImage(fd, noteId) {
    return this.httpUtil.put(this.API + '/uploadFile/' + noteId, fd, {
      reportProgress: true,
      responseType: 'text'
    });
  }
}