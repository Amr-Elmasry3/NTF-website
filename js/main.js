
let head= document.querySelector(".headr");

window.onscroll = function (){
  if(window.scrollY >= 700){
    head.style.cssText= "position: sticky ; top: 0 ; background-color: #39143f70";
    up.style.cssText= "display: block ; position: fixed ; bottom: 30px ; right: 40px ; width: fit-content ; background-color: #9C27B0 ; color: white ; border: none ; border-radius: 6px ; font-size: 15px ; padding: 5px ; font-family: sans-serif ; font-weight: bold ; box-shadow: 0 0 4px white ; cursor: pointer";
  }
  else {
    head.style.cssText= "position: relative ; background-color: transparent";
    up.style.cssText= "display: none"
  }
};


let up= document.createElement("button");
let upText= document.createTextNode("Up");

up.appendChild(upText);
head.appendChild(up);

up.style.cssText= "display: none";

up.onclick= function (){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

let icon= document.querySelector(".icon");
let sB= document.querySelector(".sidebar");
let counter=0;
let iconOne= document.querySelector(".icon-one");
let iconTwo= document.querySelector(".icon-two");
let iconThree= document.querySelector(".icon-three");

icon.onclick = function (){
  if(counter === 0){
    sB.style.cssText= "display: flex ; animation: translate-sidebar 0.4s linear ; left: 0px";
    icon.style.cssText= "width: 16px ; height: 16px";
    iconOne.style.cssText= "transform: rotate(45deg) translate(1px,7px) ; width: 16.5px";
    iconTwo.style.cssText= "display: none";
    iconThree.style.cssText= "transform: rotate(-45deg) translate(-3px,-3px)";
    counter++;
  }
  else {
    sB.style.cssText= "animation: translate-sidebar-back 0.4s linear ; left: -160px";
    icon.style.cssText= "width: 27px ; height: 27px";
    iconOne.style.cssText= "transform: rotate(0) translate(0,0)";
    iconTwo.style.cssText= "display: block";
    iconThree.style.cssText= "transform: rotate(0) translate(0,0)";
    counter= 0;
  }
}

let login= document.querySelector(".login");
let logout= document.querySelector(".orlogout");

if (window.localStorage.getItem("loginUserData")){
  logout.innerHTML= "Logout";
}
else if (!window.localStorage.getItem("loginUserData")){
  logout.innerHTML= "Login";
}


login.onclick = function (){

  if (logout.innerHTML=== "Logout"){
    window.localStorage.removeItem("loginUserData");

    logout.removeAttribute("href");
    logout.innerHTML=== "Login";
    window.location.reload();
  }
  else if (logout.innerHTML=== "Login"){
    logout.setAttribute("href","login.html");
  }
}
