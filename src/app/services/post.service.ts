import { Post } from './../components/Models/Mail';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  mailUrl:string = "https://jsonplaceholder.typicode.com/comments"
  constructor(private http:HttpClient) {}
 
  getMail() : Observable<Post[]>{
        return this.http.get<Post[]>(this.mailUrl)
    }
   getPost(id:number) : Observable<Post>{
     const url = `${this.mailUrl}/${id}`;
     return this.http.get<Post>(url);
   }
}
