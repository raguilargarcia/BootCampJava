export function renderUsers(users, onUserClick) {
  const userList = document.getElementById("users-list");
  userList.innerHTML = "";

  users.forEach((user) => {
    const userItem = document.createElement("li");
    userItem.textContent = user.name;
    userItem.style.cursor = "pointer";
    userItem.addEventListener("click", () => onUserClick(user.id));
    userList.appendChild(userItem);
  });
}

export function renderPosts(posts) {
  const postList = document.getElementById("posts-list");
  postList.innerHTML = "";

  posts.forEach((post) => {
    const postItem = document.createElement("li");
    postItem.textContent = post.title;
    postList.appendChild(postItem);
  });
}

export function showError(message) {
  const errorContainer = document.getElementById("error");
  errorContainer.textContent = message;
}
