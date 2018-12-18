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

const createPost = post => {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   posts.push(post);

   const error = false;

   if (!error) {
    resolve();
   } else {
    reject('Error: Something went wrong!');
   }
  }, 2000);
 });
};

// In async/await, we can't use arrow function
async function init() {
 await createPost({ title: "Post Three", body: "This is the third post" });

 getPosts();
}

init();

// Async/await with fetch

async function fetchPosts() {
 const res = await fetch("https://jsonplaceholder.typicode.com/posts");

 const json = await res.json();
 console.log(json);
}
fetchPosts();