// get month
const todayDate = new Date();
let monthName = month[todayDate.getMonth()];

// get date number
let day = todayDate.getDate();

// get year
let year = todayDate.getFullYear();

// full date
timeStamp.textContent = `* ${monthName} ${day}, ${year}`;

console.log("timeStamp: ", timeStamp.textContent);
console.log(yourName.textContent = timeStamp);
