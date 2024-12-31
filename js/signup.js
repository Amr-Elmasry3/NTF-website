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

let regexp= /(www.)?(([a-z])+([0-9]+)?)@[a-z]{5}.com/;

button.onclick= function (){

  // window.localStorage.clear();

  if(req1.value !== "" && req2.value !== "" && req3.value !== ""){
    if (window.localStorage.length > 0){
      for(let i=0 ; i<arrayOfInfo.length ; i++){
        if(req1.value !== arrayOfInfo[i].name && req2.value !== arrayOfInfo[i].email && req3.value !== arrayOfInfo[i].password ){
          if(i === arrayOfInfo.length-1){
            let userInfo= {
              name: `${req1.value}`,
              email: `${req2.value}`,
              password: `${req3.value}`,
            };
            if (regexp.test(req2.value) === true){
              arrayOfInfo.push(userInfo);
              window.localStorage.setItem("userData",JSON.stringify(arrayOfInfo));
              window.open("login.html","_parent");
            }
            else {
              reqOne.style.cssText= "border-color: green";
              reqTwo.style.cssText= "border-color: red";
              reqThree.style.cssText= "border-color: green";
            }
          }
          else{
            continue;
          }
        }
        else if(req1.value === arrayOfInfo[i].name && req2.value === arrayOfInfo[i].email && req3.value === arrayOfInfo[i].password){
          break;
        }
        else if(req1.value === arrayOfInfo[i].name && req2.value === arrayOfInfo[i].email && req3.value !== arrayOfInfo[i].password){
          break;
        }
        else if(req1.value === arrayOfInfo[i].name && req2.value !== arrayOfInfo[i].email && req3.value !== arrayOfInfo[i].password){
          break;
        }
        else if(req1.value !== arrayOfInfo[i].name && req2.value === arrayOfInfo[i].email && req3.value !== arrayOfInfo[i].password){
          break;
        }
        else if(req1.value !== arrayOfInfo[i].name && req2.value === arrayOfInfo[i].email && req3.value === arrayOfInfo[i].password){
          break;
        }
        else if(req1.value !== arrayOfInfo[i].name && req2.value !== arrayOfInfo[i].email && req3.value === arrayOfInfo[i].password){
          break;
        }
        else if(req1.value === arrayOfInfo[i].name && req2.value !== arrayOfInfo[i].email && req3.value !== arrayOfInfo[i].password){
          break;
        }
      }
    }
    else {
      let userInfo= {
        name: `${req1.value}`,
        email: `${req2.value}`,
        password: `${req3.value}`,
      };
      if (regexp.test(req2.value) === true){
        arrayOfInfo.push(userInfo);
        window.localStorage.setItem("userData",JSON.stringify(arrayOfInfo));
        window.open("login.html","_parent");
      }
    }
  }
}

let span1= document.createElement("span");
span1.appendChild(document.createTextNode("is already used"));

let span2= document.createElement("span");
span2.appendChild(document.createTextNode("is already used"));

let span3= document.createElement("span");
span3.appendChild(document.createTextNode("is already used"));

req1.onblur = function (){

  if (window.localStorage.length > 0){
    for (let i=0 ; i<arrayOfInfo.length ; i++){
      if (req1.value !== "" && req1.value === arrayOfInfo[i].name){
        span1.style.cssText="display: block ; position: absolute ; top: 74px ; left: 50% ; transform: translate(-50%) ; color: red ; font-size: 14px";
        reqOne.before(span1);
        reqOne.style.cssText= "border-color: red";
        break;
      }
      else if (req1.value !== "" && req1.value !== arrayOfInfo[i].name){
        span1.style.cssText= "display: none";
        if(i === arrayOfInfo.length -1){
          reqOne.style.cssText= "border-color: #FFFFFFCC";
        }
        else {
          continue;
        }
      }
      else if (req1.value === ""){
        span1.style.cssText= "display: none";
        reqOne.style.cssText= "border-color: #FFFFFFCC";
      }
    }
  }
}
req2.onblur = function (){
  if (window.localStorage.length){
    for (let i=0 ; i<arrayOfInfo.length ; i++){
      if (req2.value !== "" && req2.value === arrayOfInfo[i].email){
        span2.style.cssText="display: block ; position: absolute ; top: 120px ; left: 50% ; transform: translate(-50%) ; color: red ; font-size: 14px";
        reqTwo.before(span2);
        reqTwo.style.cssText= "border-color: red";
        break;
      }
      else if (req2.value !== "" && req2.value !== arrayOfInfo[i].email){
        span2.style.cssText= "display: none";
        if(i === arrayOfInfo.length -1){
          if (regexp.test(req2.value) === true){
            reqTwo.style.cssText= "border-color: #FFFFFFCC";
          }
          else{
            reqTwo.style.cssText= "border-color: red";
          }
        }
        else {
          continue;
        }
      }
      else if (req2.value === ""){
        span2.style.cssText= "display: none";
        reqTwo.style.cssText= "border-color: #FFFFFFCC";
      }
    }
  }
  else {
    if (req2.value !== ""){
      if (regexp.test(req2.value) === true){
        reqTwo.style.cssText= "border-color: #FFFFFFCC";
      }
      else {
        reqTwo.style.cssText= "border-color: red";
      }
    }
  }
}

req3.onblur = function (){
  
  for (let i=0 ; i<arrayOfInfo.length ; i++){
    if (req3.value !== "" && req3.value === arrayOfInfo[i].password){
      span3.style.cssText="display: block ; position: absolute ; top: 175px ; left: 50% ; transform: translate(-50%) ; color: red ; font-size: 14px";
      reqThree.before(span3);
      reqThree.style.cssText= "border-color: red";
      break;
    }
    else if (req3.value !== "" && req3.value !== arrayOfInfo[i].password){
      span3.style.cssText= "display: none";
      if(i === arrayOfInfo.length -1){
        reqThree.style.cssText= "border-color: #FFFFFFCC";
      }
      else {
        continue;
      }
    }
    else if (req3.value === ""){
      span3.style.cssText= "display: none";
      reqThree.style.cssText= "border-color: #FFFFFFCC";
    }
  }
}

/*   3   */

