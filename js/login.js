let show= document.querySelector(".show");
let hidden= document.querySelector(".hidden");
let password= document.querySelector(".password");

hidden.onclick= function (){
  hidden.style.cssText= "display: none";
  show.style.cssText= "display: block";
  password.setAttribute("type","text");
}
show.onclick= function (){
  show.style.cssText= "display: none";
  hidden.style.cssText= "display: block";
  password.setAttribute("type","password");
}


let button= document.querySelector(".login2");

let reqOne= document.querySelector(".req-one");
let reqTwo= document.querySelector(".req-two");
let reqThree= document.querySelector(".req-three");

let req1= document.querySelector(`input[type="text"]`);
let req2= document.querySelector(`input[type="email"]`);
let req3= document.querySelector(`input[type="password"]`);

let arrayOfInfo= [];

if (window.localStorage.getItem("userData")){
  arrayOfInfo = JSON.parse(window.localStorage.getItem("userData"));
}


button.onclick= function (){

  if(req1.value !== "" && req2.value !== "" && req3.value !== ""){
    for (let i=0 ; i<arrayOfInfo.length ; i++){
      if(req1.value === arrayOfInfo[i].name && req2.value === arrayOfInfo[i].email && req3.value === arrayOfInfo[i].password){
        let loginUserData= {
          loginName: `${req1.value}`,
          loginEmail: `${req2.value}`,
          loginPassword: `${req3.value}`,
        }
        window.localStorage.setItem("loginUserData", JSON.stringify(loginUserData));
        window.open("index.html","_parent");
      }
    }
  }
}

let arrayOfInfoEmail,arrayOfInfoPassword;

req1.onblur = function (){

  if (window.localStorage.getItem("userData")){
    for (let i=0 ; i<arrayOfInfo.length ; i++){
      if(req1.value !== "" && req1.value === arrayOfInfo[i].name){
        reqOne.style.cssText= "border-color: green";
        arrayOfInfoEmail= arrayOfInfo[i].email;
        arrayOfInfoPassword= arrayOfInfo[i].password;
        break;
      }
      else if (req1.value !== "" && req1.value !== arrayOfInfo[i].name){
        reqOne.style.cssText= "border-color: red";
      }
      else{
        reqOne.style.cssText= "border-color: #FFFFFFCC";
      }
    }
  }
  else {
    if (req1.value !== ""){
      reqOne.style.cssText= "border-color: red";
    }
    else {
      reqOne.style.cssText= "border-color: #FFFFFFCC";
    }
  }
}
req2.onblur = function (){
  
  if (window.localStorage.getItem("userData")){
    if(req2.value !== "" && req2.value === arrayOfInfoEmail){
      reqTwo.style.cssText= "border-color: green";
    }
    else if (req2.value !== "" && req2.value !== arrayOfInfoEmail){
      reqTwo.style.cssText= "border-color: red";
    }
    else{
      reqTwo.style.cssText= "border-color: #FFFFFFCC";
    }
  }
  else {
    if (req2.value !== ""){
      reqTwo.style.cssText= "border-color: red";
    }
    else {
      reqTwo.style.cssText= "border-color: #FFFFFFCC";
    }
  }
}

req3.onblur = function (){

  if (window.localStorage.getItem("userData")){
    if(req3.value !== "" && req3.value === arrayOfInfoPassword){
      reqThree.style.cssText= "border-color: green";
    }
    else if (req3.value !== "" && req3.value !== arrayOfInfoPassword){
      reqThree.style.cssText= "border-color: red";
    }
    else{
      reqThree.style.cssText= "border-color: #FFFFFFCC";
    }
  }
  else {
    if (req3.value !== ""){
      reqThree.style.cssText= "border-color: red";
    }
    else {
      reqThree.style.cssText= "border-color: #FFFFFFCC";
    }
  }
}
