import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlget = "http://localhost:3001/get/users/";
  urldelete = "http://localhost:3001/new/user/";
  urlpost = "http://localhost:3001/new/user/";
  urlput = "http://localhost:3001/new/user/";

  constructor(private http: HttpClient) { }

  getusers(): Observable<any>{
    return this.http.get(this.urlget)
  }

  deleteuser(id: string): Observable<any>{
    return this.http.delete(this.urldelete + id);
  }

  saveuser(user: user): Observable<any>{
    return this.http.post(this.urlpost, user);
  }

  getuser(id: string): Observable<any>{
    return this.http.get(this.urlget + id);
  }

  edituser (id: string, user:user):Observable<any>{
    return this.http.put(this.urlput + id, user);
  }
}
