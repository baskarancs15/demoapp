import { Component, OnInit } from "@angular/core";
import { PostService } from "../../services/post.service";
import { CommentsService } from "../../services/comments.service";
import { Router } from "@angular/router";
declare var UIkit: any;
@Component({
  selector: "app-admin-dash",
  templateUrl: "./admin-dash.component.html",
  styleUrls: ["./admin-dash.component.css"]
})
export class AdminDashComponent implements OnInit {
  private title: any;
  private description: any;
  private postList: any;
  private comments: any;
  private post_id: any;
  private commentdescription: any;
  private commentList: any;
  private selectedFile: any;

  constructor(
    private postservice: PostService,
    private commentservice: CommentsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPost();
    // this.getComment();
  }

  createPost() {
    if (this.title != undefined && this.description != undefined) {
      let postData = {
        title: this.title,
        description: this.description,
        comment: this.addComment
      };
      this.postservice.createPost(postData).subscribe(res => {
        console.log("Post created successfully");
        UIkit.modal("#modal-example").hide();
        this.getPost();
      });
    } else {
      alert("please fill the fields");
    }
  }

  getPost() {
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
    if (this.commentdescription != undefined) {
      let res = localStorage.getItem("token");
      let retrievedObject = localStorage.getItem("userData");
      let result = JSON.parse(retrievedObject);
      let comment_by = result.email;
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
    this.router.navigateByUrl("/login");
  }
}
