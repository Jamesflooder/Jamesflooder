

function openTab(e,tabname) {
    var tabcontent=document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
        const element = tabcontent[i];
        element.style.display = 'none';
        
    }
    var tablink=document.getElementsByClassName('tablink');
    for (let i = 0; i < tablink.length; i++) {
        const element = tablink[i];
        element.className.replace("active","");
        element.style.color = ""
        
        
    }
    
    document.getElementById(tabname).style.display = 'block';
    
    document.getElementById(tabname).style.textAligncolor = 'center';
    e.currentTarget.classList.add("active");
    e.currentTarget.style.color = 'green'


    var taber= document.getElementsByClassName('toAnime');

    for (let i = 0; i < taber.length; i++) {
        const element = taber[i];
    
        element.classList.add('slided');
    
        setTimeout(() => {
            element.classList.remove('slided');
        }, 3000);
    }
    

    


    
}
var curs=document.querySelector('.cursor');
var gip=document.getElementsByClassName('dec');
document.addEventListener('mousemove',(e)=>{
    
    curs.style.top= e.pageY + 'px';
    curs.style.left= e.pageX + 'px';
    
})

var effet =document.getElementsByClassName('cur');
function ef(el){
    el=curs;
    if(el.style.display === 'none'){
        el.style.display= 'block';}
    else{
        el.style.display = 'none';}


}
function obb(){
    if(curs.style.display === 'block'){
        curs.style.display = 'none';
    }
    else{
        curs.style.display ='block';
    }
}


  let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
  setTimeout(function(){ plusSlides(1) }, 3000); 
}


setInterval(function(){ plusSlides(1) }, 3000);



function leng(e) {

  let j=1;
  for (let i = 0; i < e.length; i++) {
    const element = e[i];
    j=j+1;    
  }
  
}



function slide(e) {


  for (let i = 1; i <= j; i++) {
    

  setTimeout(() => {
    e.style.transform = "translateX("+ (100/j)*i+ "%)"
  }, 1000);
    
  } 



  setTimeout(() => {
    e.style.transform = "translateX("+ 100/j% + ")"
  }, 1000);
  
}