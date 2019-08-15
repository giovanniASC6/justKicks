var firebaseConfig = {
    apiKey: "AIzaSyCTOt61c_haMNWh5U3SkWdvirTixRUE8BA",
    authDomain: "justkicks-7f307.firebaseapp.com",
    databaseURL: "https://justkicks-7f307.firebaseio.com",
    projectId: "justkicks-7f307",
    storageBucket: "",
    messagingSenderId: "75792994321",
    appId: "1:75792994321:web:840e7dc844cb423d"
};

firebase.initializeApp(firebaseConfig);

const bidElement = document.getElementById("inputLine");
var currentMaxBid = 0;

const database = firebase.database().ref("Bid");
getCurrentMaxBid();

function updateDB(){
    const number = parseFloat(bidElement.value);
    bidElement.value = "";
    const value = {
        BID: number
    }

    database.push(value);

    if(value > currentMaxBid){
        getCurrentMaxBid();
    }
}

function getCurrentMaxBid(){
    const currentMaxBidSpan = document.getElementById("currentMaxBid");
    database.ref.orderByChild("BID").limitToLast(1).on("child_added", function(biggestBid) {
        currentMaxBid = biggestBid.val().BID;
        currentMaxBidSpan.innerText = biggestBid.val().BID.toFixed(2);
        document.getElementById("inputLine").setAttribute("min", currentMaxBid + 0.01);
        event.preventDefault();
    });
}


