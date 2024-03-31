const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function pageAnimation(){
    let elems = document.querySelectorAll(".elem")

let elemc = document.querySelector(".elem-container");
let fixedImg = document.querySelector("#fixed-image")
elemc.addEventListener("mouseenter", function () {
    fixedImg.style.display = "block"
})
elemc.addEventListener("mouseleave", function () {
    fixedImg.style.display = "none"
})

elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        let image = e.getAttribute("data-image")
        console.log(image);
        fixedImg.style.backgroundImage = `url(${image})`
    })

})
let array=[
    "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg",
    "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp",
    "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg"
        
   
]
let pright=document.querySelector(".pojectc-right");
console.log(pright);
 text1 =document.querySelector(".pleft-contant #text1");
 text2 =document.querySelector(".pleft-contant #text2");
 text3 =document.querySelector(".pleft-contant #text3");
 console.log(text1);

text1.addEventListener("click",function(){
    pright.style.backgroundImage=`url(${array[0]})`
    text1.style.color="gray"
    text2.style.color="white"
    text3.style.color="white"
    
    
})
text2.addEventListener("click",function(){
    text1.style.color="white"
    text2.style.color="gray"
    text3.style.color="white"
    pright.style.backgroundImage=`url(${array[1]})`
    
})
text3.addEventListener("click",function(){
    text2.style.color="white"
    text3.style.color="gray"
    pright.style.backgroundImage=`url(${array[2]})`
    
})

}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween:50,
       
      });
}
swiperAnimation()
pageAnimation()

let fullscrn = document.querySelector("#full-scrn");
let menu = document.querySelector("#page1 .menu");
let img = document.querySelector("nav img");
let closebtn = document.querySelector("#page1 .menu #close");
let menubtn = document.querySelector("#page1 .menu #menubtn");

flag=0


menu.addEventListener("click",function(){
    if(flag==0){
     fullscrn.style.top="0"
 img.style.opacity="0"
 menubtn.style.display="none"
 closebtn.style.display="block"
 
 
 
 flag=1
    }else{
     fullscrn.style.top="-100%"
     img.style.opacity="1"
     menubtn.style.display="block"
     closebtn.style.display="none"
     
 
     flag=0
 
    }
 })

let loader = document.querySelector("#loader")
function Loaderanimaton(){
    setTimeout(function(){
loader.style.top="-100%"
    },4000)
}
Loaderanimaton()