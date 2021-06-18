import { IPost } from "./feed.model";
import posts from "./feed.schema";

export default class PostService {
  // Create a Post
  public createPost(post_params: IPost, callback: any) {
    const _session = new posts(post_params);
    _session.save(callback);
  }

  public filterPost(query: any, callback: any) {
    posts.findOne(query, callback);
  }
}
