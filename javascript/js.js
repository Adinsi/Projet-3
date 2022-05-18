
// objectif defis images description et long_texte qui est le parent de présentation//
const bt = document.getElementById('bt');
const images = document.querySelector('.images');
const description= document.getElementById('description');
const long_texte = document.querySelector('.long_texte');
const bt2 =document.getElementById('bt2');
// fin //

// le boutton biographie //
const bio = document.getElementById('bio');
const parentDeFusce = document.querySelector('.fusce');
// fin de biographie//






bt.addEventListener('click',afficher);
function afficher (){
    images.classList.toggle('active');
    description.style.color ='white';
    description.textContent= 'Mn objectif est de devellopper des interfaces web adaptées pour les utilisateurs tout en repondant a un cahier des charges élaborés par un chef de projet ';
   
    long_texte.style.background = 'blue'
}


bt2.addEventListener('click',afficher2);
function afficher2 (){
    images.classList.toggle('active2');
    description.style.color ='white';
    description.textContent= "les défis auxquels sont eprouvéés un developpeur web est la recherche de comptabilité qui se base sur l'expérience utilisateur";
   
    long_texte.style.background = 'orange'
}

bio.addEventListener('click',biographie);
function biographie (){
    
    
    parentDeFusce.children[1].textContent = "Né le premier Novembre 1998 a cotonou, je suis issue d'une famille de 8 enfants. Passionné par les metiers de web, je me suis lancé dans le developpement web le yfyfyf yfyfyf hhfhfcyydyduyyddstir sxutrcrtrtrtrtrt rtxrtjrrt rtjrrxty"
    
   
}


const presentation = document.querySelector('.page1');
const premmier = document.querySelector('.premier');

presentation.addEventListener('click',()=>{
    premmier.style.boxShadow="5px 5px 20px 5px orange"
})








