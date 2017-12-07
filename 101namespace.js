var Blog;
(function (Blog) {
    Interface;
    IPost;
    {
        title: string;
        body: string;
    }
    var Post = /** @class */ (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
        };
        return Post;
    }());
    Blog.Post = Post;
})(Blog || (Blog = {}));
var blogPost;
(function (blogPost) {
    Interface;
    IPost;
    {
        title: string;
        body: string;
        slug: string;
        seoKeywords: string;
    }
    var Post = /** @class */ (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
            this.slug = post.slug;
            this.seoKeywords = post.seoKeywords;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
            console.log(this.slug);
            console.log(this.seoKeywords);
        };
        return Post;
    }());
    blogPost.Post = Post;
})(blogPost || (blogPost = {}));
var blogPost = new Blog.Post({
    title: "my great post",
    body: "some content"
});
blogPost.printPost();
var contentPost = new Content.Post({
    title: "My great post",
    body: "some content",
    slug: 'my-great',
    seoKeywords: "post content"
});
blogPost.printPost();
//# sourceMappingURL=101namespace.js.map