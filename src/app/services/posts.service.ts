import { Post } from '../models/Post.model';
import { Subject } from 'rxjs';
import { post } from 'selenium-webdriver/http';

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
    
    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.emitPost();
    }

    removePost(postToRemove: Post) {
        const postIndex: number = this.posts.findIndex(
            (post) => {
                console.log(post.title);
                if (post === postToRemove) {
                    console.log('REMOVE >>>>> ' + post.title);
                    return true;
                }
            }
        );
        console.log(postIndex);
        console.log(this.posts.length);
        this.posts.splice(postIndex, 1);
        console.log(this.posts.length);
        this.emitPost();
    }
}