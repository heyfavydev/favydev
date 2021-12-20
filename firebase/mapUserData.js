export const mapUserData = (user) => {
    const { displayName, email, phoneNumber, photoURL, uid } = user
    return {
        id: uid,
        displayName,
        email,
        phoneNumber,
        photoURL,
        userTamplet: false,
        blogs:[]
    }
 
}
 