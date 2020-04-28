function func(){
    var a = document.querySelector('.mainloader');
    a.style.opacity = "0"
    a.style.zIndex = "-5";
}
function down(){
   
        var img = document.querySelector('.main');
        img.style.top = "128px";
        let tab = document.querySelector(".fa-bars"),
        time = document.querySelector('.fa-times');
        tab.style.display= "none";        
        time.style.display = "inline-block";
        img.style.transition = "0.3s";
        
}
function up(){
    var img = document.querySelector('.main');
    img.style.top = "0";
    let tab = document.querySelector(".fa-bars"),
    time = document.querySelector('.fa-times');
    time.style.display= "none";        
    tab.style.display = "inline-block"
}
const slides = document.querySelector('section').children;

let count =0;
function changeRight(){
   if(count == slides.length-1){
       count=0;
   }
   else{
       count++;
   }
   changeIntro(); 
}
function changeIntro(){
    for(let i = 0;i<slides.length;i++){
        slides[i].classList.remove("activeIntro")
    }
    slides[count].classList.add("activeIntro");
}
function changeLeft(){
  if(count == 0){
      count = slides.length-1;
  }
  else{
      count--;
  }
  for(let i = 0;i<slides.length;i++){
    slides[i].classList.remove("activeIntro")
}
slides[count].classList.add("activeIntro");
}

const topbtn = document.querySelector("#clickTop");
window.addEventListener("scroll",function(){
   if(window.scrollY > 100){
      topbtn.classList.add("gotoTop");
   }
   else {
    topbtn.classList.remove("gotoTop");
   }
});
