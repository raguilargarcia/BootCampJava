import { fetchUsers, fetchUserPosts } from "./api.js";
import { renderUsers, renderPosts } from "./ui.js";

async function initApp() {
  try {
    const users = await fetchUsers();
    console.log(users);
    renderUsers(users, handleUserClick);
  } catch (error) {
    console.error("Error al cargar usuarios:", error);
  }
}

async function handleUserClick(userId) {
  try {
    const posts = await fetchUserPosts(userId);
    renderPosts(posts);
  } catch (error) {
    console.error("Error al cargar posts:", error);
  }
}

initApp();
