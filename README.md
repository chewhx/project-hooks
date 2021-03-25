# Sample project to create a custom hook

Consolidating all the axios requests, their responses, and a custom message in to a React hook which can be reused in other components.

The demo make request to the [jsonplacholder fake Rest API](https://jsonplaceholder.typicode.com/).

I've wrapped the axios requests and responses in a usePosts() hook, which provide methods to various actions and their responses.

You can call the hook by passing a base url or api endpoint. The actions perform the basic CRUD operations.

```javascript
const {
results, 
message, 
getAllPosts, 
addPost,
updatePost,
deletePost
} = usePosts("https://jsonplaceholder.typicode.com");
```

See the demo [here](https://project-hooks.herokuapp.com)

For each action, the response and a custom message is set, which can be output into the frontend.