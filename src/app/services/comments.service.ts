import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const addcommenturl = "http://localhost:3000/savecomment";

const getcommenturl = "http://localhost:3000/getallcomment";

@Injectable({
  providedIn: "root"
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  addcomment(addcomment) {
    return this.http.post(addcommenturl, addcomment);
  }

  getComment() {
    return this.http.get(getcommenturl);
  }
}
