import { Post } from './../Models/Mail';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
@Component({
  selector: 'app-open-email',
  templateUrl: './open-email.component.html',
  styleUrls: ['./open-email.component.css']
})
export class OpenEmailComponent implements OnInit {
  post: Post[];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    //@ts-ignore
    this.postService.getPost(id).subscribe(post => this.post = post);
  }

}
