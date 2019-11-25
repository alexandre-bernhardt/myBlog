import { Post } from '../models/Post.model';
import { Subject } from 'rxjs';

export class PostsService {

    posts: Post[] = [
        new Post('Mon premier post', "votre AppComponent contiendra l'array des posts, et il le passera à un component PostListComponent"),
        new Post('Mon deuxième post', "Pensez aux différents types de databinding — comment passer des données d'un component à un autre, comment afficher des données dans le template et comment réagir à un événement venant du template"),
        new Post('Un dernier post', 'juste pour tester'),
    ];

    postsSubject = new Subject<Post[]>();

    emitPost() {
        this.postsSubject.next(this.posts);
    }

    likePost(post: Post) {
        post.loveIts ++;
        this.emitPost();
    }

    disikePost(post: Post) {
        post.loveIts --;
        this.emitPost();
    }
    
}