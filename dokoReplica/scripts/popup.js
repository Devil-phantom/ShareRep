let popup = document.getElementById("LogINB");
let overlay = document.getElementById("overlayLogIn");
function openpopup(){
    popup.classList.add("logVis");
    overlay.classList.add("overlayLogInVis");
}
function closepopup(){
    popup.classList.remove("logVis");
    overlay.classList.remove("overlayLogInVis");
}