import jsCookie from "js-cookie";

// function for return user data from cookies
export const getUserInfo = () => {
  const userData = jsCookie.get("user");
  if (!userData) {
    return;
  }
  return JSON.parse(userData);
};

// function for set user info to cookies
export const setUserCookie = (user) => {
  // login session will expires after 1 hour
  jsCookie.set("user", JSON.stringify(user), {
    expires: 1 / 24,
  });
};

// function for remove cookies
export const removeUserCookie = () => {
  jsCookie.remove("user");
};
