import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const posturl = "http://localhost:3000/savepost";
const getposturl = "http://localhost:3000/getallpost";
@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private http: HttpClient) {}

  createPost(postdata) {
    return this.http.post(posturl, postdata);
  }
  getAllpost() {
    return this.http.get(getposturl);
  }
}
