document.getElementById("chat").style.display = "none";

const cards=document.querySelectorAll('.card');
cards[0].addEventListener('mousemove',rotate);
cards[1].addEventListener('mousemove',rotate);
cards[2].addEventListener('mousemove',rotate);

function rotate(event){
  const cardItem=this.querySelector('.card-item');
  const halfHeight = cardItem.offsetHeight/2;

  cardItem.style.transform='rotateX('+-
  (event.offsetY-halfHeight)/10+'deg)rotateY('+(event.offsetX-halfHeight)/10+'deg)'
};

// card1
window.addEventListener('click', function(event){
 if (event.target.hasAttribute('data-toggle')) {
  document.getElementById("h1").remove()&document.getElementById("card2").remove()&document.getElementById("card3").remove();
 }
})
var card1 = document.getElementById("card1");
card1.addEventListener("click", function(){
  document.getElementById("chat").style.display="block"
});

// card2
window.addEventListener('click', function(event){
  if (event.target.hasAttribute('data-toggle1')) {
   document.getElementById("h1").remove()&document.getElementById("card1").remove()&document.getElementById("card3").remove();
  }
 })
 var card1 = document.getElementById("card2");
 card1.addEventListener("click", function(){
   document.getElementById("chat").style.display="block"
 });

// card3
window.addEventListener('click', function(event){
  if (event.target.hasAttribute('data-toggle2')) {
   document.getElementById("h1").remove()&document.getElementById("card1").remove()&document.getElementById("card2").remove();
  }
 })
 var card1 = document.getElementById("card3");
 card1.addEventListener("click", function(){
   document.getElementById("chat").style.display="block"
 });













