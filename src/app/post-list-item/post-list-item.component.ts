import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLike() {
    this.postsService.likePost(this.post);
    console.log('loveIt ++ : ' + this.post.loveIts );
  }

  onDislike() {
    this.postsService.disikePost(this.post);
    console.log('loveIt -- : ' + this.post.loveIts );
  }

}
