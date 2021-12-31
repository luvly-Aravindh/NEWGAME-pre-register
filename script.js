/*Game Image Slider*/ 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
/*Subscribe the game form*/ 
function validateform(){
    var name= document.myform.name.value;
    var num=document.myform.num.value;
    var email=document.myform.email.value;
    if(name==null || name=="")
    {
    alert("enter your name must")
    return false
    }else if(num.length<10)
    {
    alert("enter the mobile number")
    return false
    }else if(email==null || email==""){
    alert("enter your email id")
    return false
    }}