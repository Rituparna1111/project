window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () =>{
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () =>{
  menu.classList.remove('active');
});



function formData() {
  var name = document.forms["userform"]["name"];
  var email = document.forms["userform"]["email"];
  var comment = document.forms["userform"]["comment"];

  if (name.value== "" ) {
    window.alert("Please enter your  name")
    name.focus();
    return false;
  }

  if (email.value== "" ) {
    window.alert("Please enter your email")
    email.focus();
    return false;
  }

  if (comment.value== "" ) {
    window.alert("Please enter comment")
    comment.focus();
    return false;
  }
  return true;
}
