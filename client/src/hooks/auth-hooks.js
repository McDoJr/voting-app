
export const authData = () => {

    const loggedIn = () => {
        return getData();
    }

    const getData = () => {
        const data = localStorage.getItem("user");
        return data ? data : false;
    }

    return { loggedIn, getData };
}