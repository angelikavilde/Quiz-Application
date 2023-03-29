const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//Random shuffle of the above list
const mylist = [];
for (let i = numbers.length; i--; ) {
  var list = numbers.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
  mylist.push(list);
}

const shownext = document.getElementById("Next");
const answer = document.getElementById("Answer");

const im1 = document.getElementById("1");
const im2 = document.getElementById("2");
const im3 = document.getElementById("3");
const im4 = document.getElementById("4");
const im5 = document.getElementById("5");
const im6 = document.getElementById("6");
const im7 = document.getElementById("7");
const im8 = document.getElementById("8");
const im9 = document.getElementById("9");
const im10 = document.getElementById("10");
const im11 = document.getElementById("11");
const im12 = document.getElementById("12");
const im13 = document.getElementById("13");
const im14 = document.getElementById("14");
const im15 = document.getElementById("15");
function hideim(k) {
  if (mylist[k] === 1) {
    im1.hidden = !im1.hidden;
  }
  if (mylist[k] === 2) {
    im2.hidden = !im2.hidden;
  }
  if (mylist[k] === 3) {
    im3.hidden = !im3.hidden;
  }
  if (mylist[k] === 4) {
    im4.hidden = !im4.hidden;
  }
  if (mylist[k] === 5) {
    im5.hidden = !im5.hidden;
  }
  if (mylist[k] === 6) {
    im6.hidden = !im6.hidden;
  }
  if (mylist[k] === 7) {
    im7.hidden = !im7.hidden;
  }
  if (mylist[k] === 8) {
    im8.hidden = !im8.hidden;
  }
  if (mylist[k] === 9) {
    im9.hidden = !im9.hidden;
  }
  if (mylist[k] === 10) {
    im10.hidden = !im10.hidden;
  }
  if (mylist[k] === 11) {
    im11.hidden = !im11.hidden;
  }
  if (mylist[k] === 12) {
    im12.hidden = !im12.hidden;
  }
  if (mylist[k] === 13) {
    im13.hidden = !im13.hidden;
  }
  if (mylist[k] === 14) {
    im14.hidden = !im14.hidden;
  }
  if (mylist[k] === 15) {
    im15.hidden = !im15.hidden;
  }
}
var k = 0;
shownext.addEventListener("click", () => {
  hideim(k);
  if (k !== 0) {
    hideim(k - 1);
  }
  k += 1;
});

const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");
const a5 = document.getElementById("a5");
const a6 = document.getElementById("a6");
const a7 = document.getElementById("a7");
const a8 = document.getElementById("a8");
const a9 = document.getElementById("a9");
const a10 = document.getElementById("a10");
const a11 = document.getElementById("a11");
const a12 = document.getElementById("a12");
const a13 = document.getElementById("a13");
const a14 = document.getElementById("a14");
const a15 = document.getElementById("a15");

function hidetext(k) {
  if (mylist[k - 1] === 1) {
    a1.hidden = !a1.hidden;
  }
  if (mylist[k - 1] === 2) {
    a2.hidden = !a2.hidden;
  }
  if (mylist[k - 1] === 3) {
    a3.hidden = !a3.hidden;
  }
  if (mylist[k - 1] === 4) {
    a4.hidden = !a4.hidden;
  }
  if (mylist[k - 1] === 5) {
    a5.hidden = !a5.hidden;
  }
  if (mylist[k - 1] === 6) {
    a6.hidden = !a6.hidden;
  }
  if (mylist[k - 1] === 7) {
    a7.hidden = !a7.hidden;
  }
  if (mylist[k - 1] === 8) {
    a8.hidden = !a8.hidden;
  }
  if (mylist[k - 1] === 9) {
    a9.hidden = !a9.hidden;
  }
  if (mylist[k - 1] === 10) {
    a10.hidden = !a10.hidden;
  }
  if (mylist[k - 1] === 11) {
    a11.hidden = !a11.hidden;
  }
  if (mylist[k - 1] === 12) {
    a12.hidden = !a12.hidden;
  }
  if (mylist[k - 1] === 13) {
    a13.hidden = !a13.hidden;
  }
  if (mylist[k - 1] === 14) {
    a14.hidden = !a14.hidden;
  }
  if (mylist[k - 1] === 15) {
    a15.hidden = !a15.hidden;
  }
}
answer.addEventListener("click", () => {
  hidetext(k);
  if (k !== 0) {
    hidetext(k - 1);
  }
});

const button1 = document.querySelector("#Next");
const button2 = document.querySelector("#Answer");

button1.addEventListener("click", function () {
  // Disable button1
  button1.disabled = true;
  // Enable button2
  button2.disabled = false;
});

button2.addEventListener("click", function () {
  // Disable button2
  button2.disabled = true;
  // Enable button1
  button1.disabled = false;
});
