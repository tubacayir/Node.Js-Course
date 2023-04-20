const posts = [
  { postName: "HTML Symbols", publishedDate: "20.03" },
  { postName: "Node Fundamentals", publishedDate: "04.04" },
  { postName: "Java Fundamentals", publishedDate: "07.05" },
];

const listPosts = () => {
  posts.map((post) => {
    console.log(post.postName);
  });
};
const addPost = (newPost) => {
  const promise = new Promise((resolve, reject) => {
    posts.push({
      postName: "Create Server with Node.Js",
      publishedDate: "15.05",
    });
    resolve(posts);
    reject("Something went Wrong");
  });
  return promise;
};

async function playPosts() {
  try {
    const addingPost = await addPost();
    listPosts();
  } catch (err) {
    console.log(err);
  }
}
playPosts();
