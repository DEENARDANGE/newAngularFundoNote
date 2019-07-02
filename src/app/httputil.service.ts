import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttputilService {

  constructor(private http: HttpClient) {}

  post(url, object): Observable <any> {
    return this.http.post<any>(url, object, {observe : 'response'});
  }

  postWithBody(url, object, header) {
    return this.http.post<any>(url, object, header);
  }

  put(url,object,header){
    return this.http.put<any>(url,object,header);
  }
  // putActive(url,object){
  //   return this.http.put<any>(url,object);
  // }
  get(url,header){
    return this.http.get<any>(url,header);
  }

  delete(url,header){
    return this.http.delete<any>(url,header);
  }

  postWithParam(url,params){
    return this.http.post<any>(url,params);
  }
 
  deleteWithParams(url,params){
    return this.http.delete(url,params);
  }
}