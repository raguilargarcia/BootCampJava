const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchUsers() {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error("Intento de obtener usuarios fallido.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al cargar usuarios:", error);
    throw error;
  }
}

export async function fetchUserPosts(userId) {
  try {
    const response = await fetch(`${BASE_URL}/posts?userId=${userId}`);
    if (!response.ok) {
      throw new Error("Intento de obtener los posts de los usuarios fallido.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al cargar posts de los usuarios:", error);
    throw error;
  }
}
