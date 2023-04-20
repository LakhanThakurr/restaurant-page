function showNavbar() {
  document.getElementsByClassName("navlink")[0].style.display = "block";
  document.getElementsByClassName("burger")[0].style.display = "none";
}

function hideNavbar() {
  document.getElementsByClassName("navlink")[0].style.display = "none";
  document.getElementsByClassName("burger")[0].style.display = "block";
  if (window.innerWidth > 1024) {
    document.getElementsByClassName("burger")[0].style.display = "none";
  }
  console.log(window.innerWidth);
}

//form-booking

document.getElementById("book-btn").addEventListener("click", myFunction);

let myname = document.getElementById("name");
function myFunction() {
  if (myname.value != "") {
    console.log(myname.value)
    document.getElementById("booked").innerHTML = "Hi " + myname.value + " Thanks for contacting us.";
    document.getElementById("booked").style.background = "#bee4c3";
  }
  else {
    document.getElementById("booked").innerHTML = "Please enter your Name!";
    document.getElementById("booked").style.background = "#bee4c3";

  }
}


// text animation


setTimeout(

  popletter("Delicious Food Zone"), 5000);


function popletter(text) {
  let element = document.querySelector(".popAnime");
  element.textContent = "";
  var index = 0;
  let id = setInterval(frame, 100);
  function frame() {
    if (index >= text.length) {
      clearInterval(id);
    } else {
      var letter = text.charAt(index);
      element.textContent += letter;
      index++;
    }
  }
}


//counter animation
// var s = 0;
// window.addEventListener('scroll', function () {
//   s = window.pageYOffset;
//   console.log(s);
//   if (window.pageYOffset > 2800) {
//     startcount();
//   }
// });

function runOnScrollWhenElementInViewport(element, callback) {
  function checkIfElementInViewport() {
    const elementPosition = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
console.log();
    if (elementPosition.top >= 0 && elementPosition.bottom <= viewportHeight) {
      callback();
      window.removeEventListener('scroll', checkIfElementInViewport);
    }
  }

  window.addEventListener('scroll', checkIfElementInViewport);
  
}

const rowcount = document.getElementById('onscroll');

runOnScrollWhenElementInViewport(rowcount, function () {
  console.log('it is in viewport!');
  startcount();

});


function startcount() {
  let count = 0;
  let element = document.querySelectorAll(".digit");
  element.textContent = "";
  let id = setInterval(frame, 1);

  function frame() {
    if (count == 2115) {
      clearInterval(id);
    } else {
      count += 1;
      if (count <= 1538) {
        element[0].textContent = count;
      }

      if (count <= 1006) {
        element[1].textContent = count;
      }

      if (count <= 179) {
        element[3].textContent = count;
      }

      element[2].textContent = count;

    }
  }
}


