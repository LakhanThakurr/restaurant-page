function showNavbar(){
  document.getElementsByClassName("navlink")[0].style.display="block";
  document.getElementsByClassName("burger")[0].style.display="none";
}

function hideNavbar(){
  document.getElementsByClassName("navlink")[0].style.display="none";
  document.getElementsByClassName("burger")[0].style.display="block";
  if(window.innerWidth > 1024){
    document.getElementsByClassName("burger")[0].style.display="none";
  }
  console.log(window.innerWidth);
}

//form-booking

document.getElementById("book-btn").addEventListener("click", myFunction);

let myname=document.getElementById("name");
function myFunction() {
  if(myname.value != "" ){
    console.log(myname.value)
  document.getElementById("booked").innerHTML= "Hi "+myname.value+" Thanks for contacting us.";
  document.getElementById("booked").style. background= "#bee4c3";}
  else{
    document.getElementById("booked").innerHTML= "Please enter your Name!";
    document.getElementById("booked").style. background= "#bee4c3";

  }
}




//
