let uneErreur = document.getElementById('resultss');

try{
    uneErreur.innerHTML = "Oh mince une erreur !";
}
catch (e) {

    alert(e.message);

}
