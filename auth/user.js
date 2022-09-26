import { getUser, signOutUser, getProfile } from '../fetch-utils.js';

const signOutLink = document.getElementById('sign-out-link');

// make sure we have a user!
// > Part C:
//     - get the user (if there is one)
//     - check if there is not a user and if so do the redirect
//       redirect code: location.replace(`/auth/?redirectUrl=${encodeURIComponent(location)}`);

const user = getUser();
if (!user) {
    const base =
        location.pathname === '/' || location.pathname === '/auth/user.js' 
            ? './' 
            : '../';
    location.replace(`${base}auth/?redirectUrl=${encodeURIComponent(location)}`);
}

let error = null;
let profile = null;

// > Part B: attach event listener to signOutLink that calls signOutUser
signOutLink.addEventListener('click', signOutUser);

window.addEventListener('load', async () => {
    const response = await getProfile(user.id);
    error = response.error;
    profile = response.data;

    if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return;
    }

    if (profile) {
        displayProfile();
    }
});

function displayProfile() {
}
