import { getSlug } from "./slugify";
// لاحظ أنه حتى هنا يمكن أن أقوم بعمل Import للـ getSlug على الشكل التالي :
export async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
}

export async function getUser(name) {
  const users = await getUsers();
  const user = users.filter((item) => getSlug(name) === getSlug(item.name))[0];
  return user;
}
