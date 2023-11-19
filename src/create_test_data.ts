import { AppDataSource } from "./data-source"
import { Post } from "./entity/Post"

AppDataSource.initialize().then(async () => {

    console.log("Inserting new users into the database...");

    for (let i = 0; i < 1000; i++) {
        const post = new Post();
        post.title = "New Post " + (i + 1);
        post.content = "Lorem Ipsum " + (i + 1);
        post.isPublished = true;
        await AppDataSource.manager.save(post);
        console.log("Saved a new post with id: " + post.id);
    }

    console.log("Loading posts from the database...");
    const posts = await AppDataSource.manager.find(Post);
    console.log("Loaded posts: ", posts);

}).catch(error => console.log(error))
