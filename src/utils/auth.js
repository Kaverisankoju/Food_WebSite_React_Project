export const saveUser = (user) => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

export const loginUser = (email, password) => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find(
    u => u.email === email && u.password === password
  );
};

export const setCurrentUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};
