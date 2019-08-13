const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener(`submit`, (e) => {
    e.preventDefault();
    // get user info//
    const email = signupForm[`signup-email`].value;
    const password = signupForm[`signup-password`].value
    // sign up the user//
    auth.createUserWithEmailAndPassword(email, password).then(cred => {

        // close signup page and resets//
        const modal = document.querySelector(`#modal-signup`)
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    })
    const usernameElement = document.getElementById("signup-name");
    const emailElement = document.getElementById("signup-email")
    const photoElement = document.getElementById("imgs")
    const username = usernameElement.value;
    const email2 = emailElement.value;
    const photo2 = photoElement.value;
    const database = firebase.database().ref("User");
    usernameElement.value = "";
    emailElement.value = "";
    photoElement.value= "";
    console.log(username + " : " + email2 + " : " + photo2 );

    //Update database here
    const value = {
        NAME: username,
        EMAIL: email2,
        PHOTO: photo2
    }
    database.push(value)
    const modal = document.querySelector(`#modal-signup`)
    M.Modal.getInstance(modal).close();
    signupForm.reset();


    
})

//Logout users
const logout = document.querySelector(`#logout`)
logout.addEventListener(`click`, (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log(`user signed out`)
    })
})

const loginForm = document.querySelector(`#login-form`)
loginForm.addEventListener(`submit`, (e) => {
    e.preventDefault();

    // user information
    const email = loginForm[`login-email`].value;
    const password = loginForm[`login-password`].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user)
        //close the login form and resets
        const modal = document.querySelector(`#modal-login`)
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
})

