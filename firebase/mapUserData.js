export const mapUserData = (user) => {
    const { displayName, email, phoneNumber, photoURL, uid } = user
    console.log(user)
    return {
        id: uid,
        Name:displayName,
        email:email,
        phoneNumber:phoneNumber,
        photoURL:photoURL
    }
 
}
 