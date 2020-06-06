import { Component, OnInit } from "@angular/core";
import { PostService } from "../../services/post.service";
import { CommentsService } from "../../services/comments.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-dash",
  templateUrl: "./user-dash.component.html",
  styleUrls: ["./user-dash.component.css"]
})
export class UserDashComponent implements OnInit {
  private postList: any;
  private comments: any;
  private post_id: any;
  private commentdescription: any;
  private commentList: any;
  constructor(
    private postservice: PostService,
    private commentservice: CommentsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    console.log("called");
    this.postservice.getAllpost().subscribe(res => {
      console.log(res, "Res created successfully");
      this.postList = res;
      this.postList.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      console.log(this.postList, "Res created successfully");
    });
  }
  addComment(postid) {
    console.log(postid);
    if (this.commentdescription != undefined) {
      let res = localStorage.getItem("token");
      let retrievedObject = localStorage.getItem("userData");
      let result = JSON.parse(retrievedObject);
      let comment_by = result.email;
      console.log(comment_by);
      console.log("assdsa", res);
      let commentData = {
        token: res,
        post_id: postid,
        description: this.commentdescription,
        comment_by: comment_by,
        comment_created_at: new Date()
      };
      console.log(commentData);
      this.commentservice.addcomment(commentData).subscribe(res => {
        console.log(res);
        this.getPost();
      });
      this.commentdescription = "";
    } else {
      alert("comment should not be empty");
    }
  }

  logout() {
    localStorage.setItem("token", null);
    localStorage.setItem("userData", null);
    this.router.navigateByUrl("/login");
  }
}
