AOS.init({
    duration : 1000
});
var typed=new Typed('#span-tag',{
    strings : ['Web Developer'],
    typeSpeed : 100,
    loop : true,
    
})
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function aftersend(){
  window.alert("Thankyou i will reach you soon!")
}


hamburger=document.querySelector(".hamburger");
hamburger.onclick=function(){
    navBar=document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}



document.addEventListener('DOMContentLoaded', function() {
    // Get all the navigation links
    var navLinks = document.getElementsByClassName('nav-link');
  
    // Add click event listener to each link
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function() {
        // Remove 'active' class from all links
        for (var j = 0; j < navLinks.length; j++) {
          navLinks[j].classList.remove('active');
        }
  
        // Add 'active' class to the clicked link
        this.classList.add('active');
        navBar.classList.remove("active");
      });
    }
  });


