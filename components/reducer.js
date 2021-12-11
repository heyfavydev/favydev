export const initialState = {
    user:null,
}
console.log(initialState.user)
export const reducer = (state, action) => {
    if (action.type === "SET_USER") {
        return {
            ...state,
            user:action.user
        }
    }
}