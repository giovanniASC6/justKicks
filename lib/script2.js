        // Your web app's Firebase configuration
        var firebaseConfig = {
          apiKey: "AIzaSyCTOt61c_haMNWh5U3SkWdvirTixRUE8BA",
          authDomain: "justkicks-7f307.firebaseapp.com",
          databaseURL: "https://justkicks-7f307.firebaseio.com",
          projectId: "justkicks-7f307",
          storageBucket: "",
          messagingSenderId: "75792994321",
          appId: "1:75792994321:web:840e7dc844cb423d"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      const database = firebase.database().ref();

document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });

  database.on("child_added",addinfoToAcc)
const accountContainer=document.querySelector(".account-details")
//  const messageContainer=

function addinfoToAcc(rowData){
    const row=rowData.val()
    const name =row.NAME
    const email=row.EMAIL
    const pElement=document.createElement("p")
    pElement.innerText=`${name}
    :${email}`
    accountContainer.appendChild(pElement)
}
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
    auth.onAuthStateChanged(user=>{
        if(user){
      setupUI(user);
        } else{
            console.log(`user logged out`)
            setupUI()
        }
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
    
    database.on("child_added",addMessageToBoard)
    
    
    function addMessageToBoard(rowData) {
        const row=rowData.val()
        const name =row.NAME
        const email=row.EMAIL
    
        const pElement=document.createElement("p")
        pElement.innerText=`${name}
        :${email}`
        accountContainer.appendChild(pElement)
    //  console.log( row );
    

    }
// let childrenArray = [];
// database.on('value', function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       var childData = childSnapshot.val();
//       childrenArray.push(childData)
//       console.log(childData)
//       console.log(childrenArray)
//     });
// });
    
    
    
    
    const loggedoutLinks = document.querySelectorAll(`.logged-out`)
    const loggedInLinks = document.querySelectorAll(`.logged-in`)
    
    
    const setupUI=(user)=>{
        if (user){
            loggedInLinks.forEach(item => item.getElementsByClassName.display=`block`)
            loggedoutLinks.forEach(item => item.getElementsByClassName.display= `none`)
    
        }
        else {
            loggedInLinks.forEach(item => item.getElementsByClassName.display=`none`)
            loggedoutLinks.forEach(item => item.getElementsByClassName.display= `block`)
     
        }
    }



    var closebtns = document.getElementsByClassName("close");
var i;

/* Loop through the elements, and hide the parent, when clicked on */
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
  this.parentElement.style.display = 'none';
})};


const accountButton=document.querySelector("#signupkey")
accountButton.addEventListener("click",resetform)
function resetform(){
  document.querySelector(".modal-content").style.display="block"
}

const cancelButton= document.querySelector("#cancel")
// console.log(cancelButton)
cancelButton.addEventListener("click",cancelForm)
function cancelForm(){
  document.querySelector(".modal-content").style.display="none"

}





