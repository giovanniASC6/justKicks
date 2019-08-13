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

var endDate = new Date("Mar 15, 2019 12:00:00").getTime();

var timer = setInterval(function() {

    let now = newDate().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
    
        document.getElementById("timer-days").innerHTML = days +
        "<span class='label'>DAY(S)</span>";
    
        document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
        "<span class='label'>HR(S)</span>";
    
        document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
        "<span class='label'>MIN(S)</span>";
    
        document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) +
        "<span class='label'>SEC(S)</span>";
    
    } else {

        document.getElementById("timer").innerHTML = "The countdown is over!";
    
    }
    
}, 1000);
