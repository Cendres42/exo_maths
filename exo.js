//Déclaration des variables
let bonResultat=0;
let ok=document.querySelector("#ok span");
ok.innerHTML=0;
let pasok=document.querySelector("#pasok span");
pasok.innerHTML=0;
let resultat=document.getElementById('resultat');
let bouton_rejouer=document.getElementById("rejouer");
let valider=document.getElementById('valider-resultat');
let choix=document.getElementById("joueur");
let image=document.getElementById("exo");
let joueur = "";
let bouton_ajout=document.getElementById("ajout-joueur");
let keyname="";
let nouveau_joueur="";
let popup ="";
let plop="";
let joueurs=[];
//let video=document.getElementById('video');


// Les boutons et évènements:
valider.addEventListener("click",validation);
bouton_rejouer.addEventListener("click",reinit);
choix.addEventListener("change",reinit);
bouton_ajout.addEventListener("click",ajout_joueur);

function ajout_joueur(){
  joueur = document.getElementById("joueur"); //le noeud parent
  popup = prompt("Saisissez votre pseudo :", "Texte par défaut");
  joueurs.push(popup);
  localStorage.setItem("liste_joueurs", JSON.stringify(joueurs));
  nouveau_joueur = document.createElement('option');
  joueur.appendChild(nouveau_joueur);
  nouveau_joueur.innerHTML=popup;
  alert("sélectionner votre nom dans le menu déroulant");
}


function personnalisation(){
joueur=choix.value;
keyname=joueur;
ok.innerHTML=sessionStorage.getItem(keyname +"-ok");
pasok.innerHTML=sessionStorage.getItem(keyname +"-pasok");
if(joueur=="Kiki") {
  image.setAttribute("style","background-image:url('cheval.jpg');");
}
else if (joueur=="Mathias"){
  image.setAttribute("style","background-image:url('sang.jpg');");
}
else if (joueur=="Gwen"){
  image.setAttribute("style","background-image:url('avion.jpg');");
}
else{
  image.setAttribute("style","background-image:url('mystery.jpg');");
}
};

function validation(){
  if (resultat.value==bonResultat){
  document.querySelector("#reponse span").innerHTML="Bravo";
    ok.innerHTML++;
    sessionStorage.setItem(keyname + "-ok",ok.innerHTML);
  }
    else
  {
  document.querySelector("#reponse span").innerHTML="Essai encore";
    pasok.innerHTML++;
    sessionStorage.setItem(keyname +"-pasok",pasok.innerHTML);
  }
}

function creation_option(){
  joueurs= JSON.parse(localStorage.getItem("liste_joueurs"));
  if(joueurs==null){
    joueurs=[];
  }
  for (let i=0; i<joueurs.length; i++){
  joueur = document.getElementById("joueur"); //le noeud parent
  nouveau_joueur = document.createElement('option');
  joueur.appendChild(nouveau_joueur);
  nouveau_joueur.innerHTML=joueurs[i];
  }
}

function reinit(){
  document.getElementById('resultat').value="";
  document.querySelector("#reponse span").innerHTML="";
  personnalisation();
  testMath();
  resultat.focus();
  //video.setAttribute("src","");
  //video.setAttribute("width","20px");
  //video.setAttribute("height","20px");
}

function testMath(){
  let nb1=Math.floor(Math.random() * 51);
  document.querySelector("#nb1 span").innerHTML=nb1;
  let nb2=Math.floor(Math.random() * 51);
  document.querySelector("#nb2 span").innerHTML=nb2;
  let signe="";
    if(nb1<=5){
    signe="*";
  }
    else if (nb2%2 == 0 & nb1>nb2){
      signe="-";
  }
    else{
    signe="+";
  }

  document.querySelector('#signe span').innerHTML=signe;
  bonResultat=0;
    if (signe=='-'){
      bonResultat=nb1-nb2;
    }
    else if(signe=='*'){
      bonResultat=nb1*nb2;
    }
    else if (signe=='+'){
      bonResultat=nb1-(-nb2);
    }
}

//possibilité de rejouer lance fonction  reinit


resultat.addEventListener("keydown", function(event){
  if (event.keyCode==13 & resultat!=""){
    validation();
    bouton_rejouer.focus();
    event.preventDefault();
    event.stopPropagation();
  }
});
//fonction affectation des points au joueur







//  let myHeading = document.querySelector('h1');
  //myHeading.textContent = 'Bonjour, monde !';
  //let titres2 = document.querySelector('h2');
  //titres2.innerHTML = "<ul><li>Ours en peluche</li><li>Caméras</li></ul>";
  /*function essaiPost(){
  var send = new XMLHttpRequest();
  send.onreadystatechange=function(){
    if(this.readyState==XMLHttpRequest.DONE && this.status==200){
    var response=JSON.parse(this.responseText);
    document.getElementById('result').innerHTML=response.postData.text;
    }
  };
  send.open("POST", "https://mockbin.com/request");
  send.setRequestHeader("Content-Type", "application/json");
  let jsonBody={};
  jsonBody.value=document.getElementById('value').value;
  send.send(JSON.stringify(jsonBody));
  }
  const form=document.getElementById('essai');
  //let envoi=form.getAttribute('type');
  form.addEventListener('click',essaiPost);


  let myInput=document.getElementById('code');
  let bouton=document.getElementById('submit-btn');
  myInput.addEventListener('input', function(e) {
    var value = e.target.value;
    if (/^CODE-/.test(value)) {
        document.getElementById("code-validation").innerHTML = "Code valide";
        bouton.removeAttribute('disabled','disabled');
        } else {
        document.getElementById("code-validation").innerHTML = "Code invalide";
        bouton.setAttribute('disabled', 'disabled');

    }
});

  function askWeather(){
  var request=new XMLHttpRequest();
  request.onreadystatechange=function(){
    if(this.readyState==XMLHttpRequest.DONE && this.status==200){
      var response=JSON.parse(this.responseText);
      document.getElementById('weather-result').innerHTML=response.current_condition.condition;
    }
  };
  request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
  request.send();
  }
  const weather=document.getElementById('ask-weather');
  weather.addEventListener('click',askWeather);

class Produits{
  constructor(id, name, price, description, imageUrl){
    this.id=id;
    this.name=name;
    this.price=price;
    this.description=description;
    this.imageUrl=imageUrl;
  }
}
const input=document.querySelector('input');
const log=document.getElementById('res-name');
input.addEventListener('input',updateV);
function updateV(b){
    log.textContent=b.target.value;
}
const genre=document.getElementById('gender');
const gdr=document.getElementById('res-gender');
genre.addEventListener('input',updateValue);
function updateValue(e){
gdr.textContent=e.target.value;
}
const souris=document.getElementById('result');
souris.addEventListener('mousemove', function(sourimove) {
document.getElementById('mouse-x').innerHTML = sourimove.offsetX; // Coordonnée X de la souris dans l'élément
document.getElementById('mouse-y').innerHTML = sourimove.offsetY; // Coordonnée Y de la souris dans l'élément
});
const newElt=document.createElement("h2");
let elt=document.getElementById("Teddy");
elt.appendChild(newElt);
newElt.innerHTML="<span>Mon nouvel Ours</span>";
newElt.classList.add("important");
newElt.style.color="red";

let eltA=document.querySelector("#plop>a");
eltA.addEventListener('click',function(event){
eltA.innerHTML="it works!!!!";
event.preventDefault();
});

let eltParent=document.getElementById("parent");
let eltCP=document.getElementById("parentCount");
eltCP.innerHTML=0;
eltParent.addEventListener('click',function(clicP){
eltCP.innerHTML++;
});

let eltEnfant=document.getElementById("enfant");
let eltCE=document.getElementById("enfantCount");
eltCE.innerHTML=0;
eltEnfant.addEventListener('click',function(clicE){
eltCE.innerHTML++;
clicE.preventDefault();
clicE.stopPropagation();
});
document.getElementById("enfantCount").innerHTMl=eltCE;

$.getJSON("http://www.agilack.fr/data.json", function(data){
  let produit=data;
  console.log(produit);
  $("h2 span").html("Ours en peluche "+produit.name);
  $(".produit img").attr("src", produit.imageUrl);
  $(".produit p").html(produit.description);
});*/
