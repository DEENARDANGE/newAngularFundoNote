import { Injectable } from '@angular/core';
import { HttputilService } from 'src/app/httputil.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  set: any;

  constructor(private httpUtil: HttputilService) { }

  public getHeader() {
    const token = localStorage.getItem('token');
    const httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token
      })
    };
    return httpheaders;
  }

  public login(user):Observable<any>{
    return this.httpUtil.post(environment.base_url + '/login', user);
  }

  public register(user) {
   return this.httpUtil.post(environment.base_url + '/registration', user);

  }
  public active(){
    const token=localStorage.getItem('token');
    const header = this.getHeader();
    return this.httpUtil.get(environment.base_url + '/active/' + token, header );
  }

  public forgotPassword(user): Observable<any> {
    return this.httpUtil.post(environment.base_url + '/forgotpassword', user);
  }

  public resetPassword(user, id) {
    return this.httpUtil.put(environment.base_url + '/resetpassword/' + id, user, id);
  }

  public getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.httpUtil.get(environment.base_url + '/get-user', {});
  }

  public updateUser(user) {
    return this.httpUtil.post(environment.base_url + '/update-user', user);
  }

  public getCollUser() {
    const token = localStorage.getItem('token');
    return this.httpUtil.get(environment.base_url + '/get-user-user/' + token, {});
  }


  public getCollUserId(email) {
    const header = this.getHeader();
    return this.httpUtil.get(environment.base_url + '/get-coll-user/' + email, header);
  }
  public getNoteOwner(ownerId) {
    const token = localStorage.getItem('token');
    return this.httpUtil.get(environment.base_url + '/get-user-email/' + token, {
      params: {
        coUserId: ownerId
      }
    });
  }


}
