import { Injectable } from '@angular/core';
import { HttputilService } from '../../../httputil.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LabelService {
  public API = '//localhost:8080/user';
  constructor(private http: HttputilService) { }

  public getLabels() {
    const header = this.getHeader();
    return this.http.get(this.API + '/get-label', header);
  }

  public getHeader() {
    const token = localStorage.getItem('token');
    const httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': token
      })
    };
    return httpheaders;
  }

  public deleteLabel(label) {
    const token = localStorage.getItem('token');
    const labelName = label.labelName;
    return this.http.deleteWithParams(this.API + '/deletelabel/' + token, {
      params: {
        labelName: labelName
      }
    });
  }

  public updateLabel(label) {
    const header = this.getHeader();
    return this.http.put(this.API + '/updatelabel', label, header);
  }

  public createLabel(label){
    const header = this.getHeader();
    return this.http.postWithBody(this.API + '/createlabel', label, header);
  }

  public mapLabelTONote({id: labelId}, {id: noteId}){
    const header = this.getHeader();
    const url = `${this.API}/map-note-label/${noteId}/${labelId}`;
    return this.http.put(url, {}, header);
  }

  public removeLabelNote(label, note){
    const noteId = note.id;
    const labelId = label.id;
    const header = this.getHeader();
    return this.http.delete(this.API + '/removenote&label/' + noteId + '/' + labelId, header);
  }
}
