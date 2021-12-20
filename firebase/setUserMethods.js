import jsCookie from "js-cookie";
import Router from "next/router";

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


// set user Tamplet 
export const setUserTamplet = () => {

  const user = getUserInfo()

  if (user.userTamplet === false) {
    const updateData = {
      id: user.id,
      Name:user.Name,
      email:user.email,
      phoneNumber:user.phoneNumber,
      photoURL: user.photoURL,
      userTamplet:true
    }
    jsCookie.set("user", JSON.stringify(updateData))
} else {
    const updateData = {
      id: user.id,
      Name:user.Name,
      email:user.email,
      phoneNumber:user.phoneNumber,
      photoURL: user.photoURL,
      userTamplet:false
    }
    jsCookie.set("user", JSON.stringify(updateData))
  }
} 