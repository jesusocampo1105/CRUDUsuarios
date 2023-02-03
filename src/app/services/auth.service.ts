import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "https://crud-usuarios-back.vercel.app";
  urlget = "https://crud-usuarios-back.vercel.app/get/users/";
  urldelete = "https://crud-usuarios-back.vercel.app/new/user/";
  urlpost = "https://crud-usuarios-back.vercel.app/new/user/";
  urlput = "https://crud-usuarios-back.vercel.app/new/user/";


  constructor(private http: HttpClient) { }

  signUp(user: any){
   return this.http.post<any>(this.url + "/login", user)
  }
}
