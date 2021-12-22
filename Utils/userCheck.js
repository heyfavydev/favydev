import { auth } from "../firebase/clientApp"
import { useAuthState } from "react-firebase-hooks/auth"
import Router from "next/router";

const userCheck = (user) => {
    // const [user] = useAuthState(auth);
    if (!user) {
        Router.push("/");
    }
}

export default userCheck
