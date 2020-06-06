import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const registerurl = "http://localhost:3000/register";
const loginurl = "http://localhost:3000/login";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(userdata) {
    return this.http.post(registerurl, userdata);
  }
  login(data) {
    console.log("from services", data);
    return this.http.post(loginurl, data);
  }
}
