import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../data/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _apiBaseUrl ="/user-api"; //with ng serve --proxy-config proxy.conf.json
  publicBaseUrl = `${this._apiBaseUrl}/public`;

  constructor(private _http : HttpClient) { }


  public getUserByUsername$(username:string) : Observable<User>{
    const url = `${this.publicBaseUrl}/user/${username}`;
    console.log( "url = " + url);
    return this._http.get<User>(url);
  }

  postUser$(u :User): Observable<User>{
    const url = `${this.publicBaseUrl}/user`;
    return this._http.post<User>(url,u /*input envoyé au serveur*/);
    //this.http.post<TypeReponseRetourneParServeur>(url_web_service , donnee_a_envoyer)
  }

  putUser$(u :User): Observable<User>{
    const url = `${this.publicBaseUrl}/user`; 
    return this._http.put<User>(url,u /*input envoyé au serveur*/);
    //this.http.put<TypeReponseRetourneParServeur>(url_web_service , donnee_a_envoyer)
  }

  public deleteUserServerSide$(username : string):Observable<any>{
    const url = `${this.publicBaseUrl}/user/${username}`;
    console.log("deleteUrl=" + url );
    return this._http.delete<any>(url);
  }

}
