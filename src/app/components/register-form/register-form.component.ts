import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
  private email: string;
  private password: string;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  register() {
    let userdata = {
      email: this.email,
      password: this.password,
      ciphertext: "dev-2019"
    };
    console.log(userdata);
    this.auth.register(userdata).subscribe(
      (res: any) => {
        if (res) {
          alert("Registered Successfully");
          this.router.navigateByUrl("/login");
        }
      },
      err => {
        console.log(err.message);
      }
    );
  }
}
