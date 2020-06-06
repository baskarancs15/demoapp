import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private email: any;
  private password: any;
  private user: any;
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {}

  redirectToregister() {
    console.log("hello");
    this.router.navigate(["/register"]);
  }

  login(email, password) {
    if (email != undefined && password != undefined) {
      var obj = {
        email: email
      };
      this.auth.login(obj).subscribe((res: any) => {
        console.log(res.docs[0].role);
        let userData = {
          email: res.docs[0].email,
          token: res.token
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("token", res.token);
        if (res.docs[0].role == "admin") {
          this.router.navigateByUrl("/admin-dash");
        } else {
          this.router.navigateByUrl("/user-dash");
        }
      });
    } else {
      alert("Please Fill all Fields");
    }
  }
}
