// document.querySelector('h4').style.background = 'yellow';

// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
// baliseHTML.style.background = "yellow";

// Click event
// const questionContainer = document.querySelector('.click-event');
// questionContainer.addEventListener('click', () =>{
//     console.log('Click !');
// })

const questionContainer = document.querySelector('.click-event')
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');

// console.log(btn1, btn2);

 questionContainer.addEventListener('click', () =>{
    //   questionContainer.classList.add('question-clicked');
     questionContainer.classList.toggle('question-clicked');
 });

  btn1.addEventListener('click', () =>{
 response.classList.toggle('show-response') 
 response.style.backgroundColor = 'red';  
 btn1.style.cursor = 'pointer';
 });

btn2.addEventListener('click', () =>{
    response.classList.toggle('show-response');
    response.style.backgroundColor = 'blue'; 
    btn2.style.cursor = 'pointer';
});
/* <div> > #id > .class > baliseHTML */
//--------------------------------------
// Mouse Events: tous les evenements qu'on peut avoir sur la saut.
const mousemove = document.querySelector(".mousemove");
window.addEventListener('mousemove', (e) => {
   mousemove.style.left = e.pageX + "px";
   mousemove.style.top = e.pageY + "px";
      
});

 window.addEventListener("mousedown", () =>{
     mousemove.style.transform = "scale(2) translate(-25%, -25%)";
 });

 window.addEventListener("mouseup", () =>{
     mousemove.style.transform = "scale(1) translate(-50%, -50%)";
     mousemove.style.border = "2px solid teal";
 });

 questionContainer.addEventListener("mousenter", () =>{
     questionContainer.style.background = "rgba(0,0,0,0.6)";
 });

 questionContainer.addEventListener("mouseout", () =>{
     questionContainer.style.background = "pink";
 });

 response.addEventListener("mouseover", () =>{
     response.style.transform = "rotate(2deg)";
 });
//---------------------------------------------
// KeyPress event
 const KeypressContainer = document.querySelector(".keypress");
 const key = document.getElementById("key");

 document.addEventListener("keypress", (e) => {
    key.textContent = e.key;

    if(e.key === "j"){
     KeypressContainer.style.background = "pink";
    } else if (e.key === "h"){
     KeypressContainer.style.background = "teal";
    } else {
     KeypressContainer.style.background = "red";
    }
    ring();
 });

 const ring = () =>{
     const audio = new Audio()
     audio.src = "./z.mp3";
     audio.play();
 } 

//--------------------------------------
// Scroll Event

// const nav = document.querySelector("nav");

11// window.addEventListener("scroll", (e) => {
//     console.log(window.scrollY);
//     if(window.scrollY > 120){
//         nav.style.top = 0;
//     }else{
//         nav.style.top = "-50px";
//     }
// });
//---------------------------------------------
// Form Events
12// const inputName = document.querySelector('input[type="text"]');
// const select = document.querySelector('select');
// const form = document.querySelector("form");
// let pseudo = "";
// let language = "";

// console.log(form)

// inputName.addEventListener('input', (e) =>{
//     pseudo = e.target.value; 
     
// });

// select.addEventListener('input', (e) => {
//     language = e.target.value;
// });

13// form.addEventListener("submit", (e) =>{
//     e.preventDefault();

//     // console.log(cgv.checked);

//     if (cgv.checked){
//      document.querySelector("form > div").innerHTML = 
//         `<h3> Pseudo :  ${pseudo} </h3>
//         <h4> Language prefere : ${language} </h4>`;
//         ;
//     } else{
//         alert("Veillez accepter les CGV");
//     }
// });

//-----------------------------------
// Load event : il se declenche quand toute la page est recharger

13// window.addEventListener('load', () => {
//     console.log("Document charger !!");
// });

//------------------------------------
// forEach: pour chacun d'eux donnes leur tel logique. 
// const boxes = document.getElementsByClassName("box");
14// const boxes = document.querySelectorAll(".box");

// boxes.forEach((box) =>{
//     box.addEventListener('click', (e) =>{
//         e.target.style.transform = "scale(0.7)";
//     })
// });
//------------------------------------
// addEventListener Vs onclick
// document.body.onclick = () => {
//     console.log("click");
// }

// Bubbling:c'est pour declencher a la fin => fin (de base l'evenement est parametre en mode Bubbing)
15// document.body.addEventListener("click", () => {
//     console.log("click 1 !")
// }, false);

// Usecapture
16// document.body.addEventListener("click", () => {
//     console.log("click 2 !")
// }, true);

//----------------------------------------
// stop propagation
17// questionContainer.addEventListener('click', (e) =>{
//     alert("Test !");
//     e.stopPropagation();
// });

// removeEventListener
//----------------------------------------
// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "cours js", "height=600, width=800")
// window.close()
// Evenements adosses a window
// alert("hello")
// confirm
16// btn2.addEventListener('click', () =>{
//     confirm("voulez vous vraiment vous tromper ?")
// });

// prompt
17// btn1.addEventListener('click', () => {
//     let answer = prompt("Entrer votre nom !");
//     questionContainer.innerHTML += "<h3>" + answer + "</h3>";
// });

// Timer, compte a rebours
18// setTimeout(() => {
//     questionContainer.style.borderRadius = "300px"
// }, 2000);

// let interval = setInterval(() => {
//     document.body.innerHTML += 
//     `<div class='box'>
//       <h2>Nouvelle Boite !</h2>
//     </div>`;
// }, 1000)

// document.body.addEventListener('click', (e) => {
//     // e.target.remove() // pour l'element du dom.
//     clearInterval(interval); // stop
// })

// console.log(location.href)
// console.log(location.host)
// console.log(location.pathname)
// console.log(location.search)
// location.replace("http://esp.sn");

// window.onload = () => {
//     location.href = "http://twitter.fr"
// }
// Navigator
// console.log(navigator.userAgent);

//https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

// var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   };
  
//   function success(pos) {
//     var crd = pos.coords;
  
//     console.log('Votre position actuelle est :');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude : ${crd.longitude}`);
//     console.log(`La précision est de ${crd.accuracy} mètres.`);
//   }
  
//   function error(err) {
//     console.warn(`ERREUR (${err.code}): ${err.message}`);
//   }
  
//   navigator.geolocation.getCurrentPosition(success, error, options);

// History
// console.log(history);
// window.history.back();
// history.go(-2)

//----------------------------------------
// SetProperty
18// window.addEventListener("mousemove", (e) => {
//     nav.style.setProperty("--x", e.layerX + "px")
//     nav.style.setProperty("--y", e.layerY + "px")
// });

