const posts = [
 {
  title: "Post One",
  body: "This is the first post"
 },
 {
  title: "Post Two",
  body: "This is the second post"
 }
];

const getPosts = () => {
 setTimeout(() => {
  let output = "";
  posts.forEach(post => output += `<li>${post.title}</li>`);
  document.body.innerHTML = output;
 }, 1000);
};

const createPost = (post, callback) => {
 setTimeout(() => {
  posts.push(post);
  callback();
 }, 2000);
};

createPost({ title: "Post Three", body: "This is the third post" }, getPosts);

