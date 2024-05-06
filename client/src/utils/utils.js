const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const currentDate = () => {
    const date = new Date();
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export const getLogo = (department) => {
    const logos = {
        csp: require('../assets/csp.png'),
        asp: require('../assets/asp.png'),
        tep: require('../assets/tep.png'),
        etp: require('../assets/etp.png'),
        np: require('../assets/np.png'),
        cjep: require('../assets/cjep.png'),
        ap: require('../assets/ap.png'),
        bap: require('../assets/bap.png')
    }

    return logos[department.toLowerCase()];
}