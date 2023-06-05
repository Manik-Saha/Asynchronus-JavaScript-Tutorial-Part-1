const posts = [
  { title: "post one", content: "This is a post one" },
  { title: "post two", content: "This is a post two" },
  { title: "post three", content: "This is a post three" },
  { title: "post four", content: "This is a post four" }
];

function addPost(post, cb) { 
    setTimeout(function () {
        posts.push(post);
        cb();
    }, 7000)
}

function printCallback() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> - ${post.content}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}

addPost({ title: "post five", content: "This is a post five" }, printCallback);
document.querySelector("#callback").addEventListener("click", printCallback);
