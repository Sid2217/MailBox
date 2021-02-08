import { PostService } from './../../services/post.service';
import { Post } from './../Models/Mail';
import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  faSearch = faSearch;
  posts : Post[];
  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.postService.getMail().subscribe(posts => {
      this.posts = posts;
    });
  }

}
