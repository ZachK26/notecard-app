var counter = 0;

document.getElementById("submitOne").onclick = function noteCards (){
    document.getElementById("cardOneTerm").innerHTML = document.getElementById("termOne").value;
    counter = 0;
    }




document.getElementById("cardOneTerm").onclick = function flip (){
if ((counter%2) == 0){
    document.getElementById("cardOneTerm").innerHTML = document.getElementById("definitionOne").value  
}
else {
    document.getElementById("cardOneTerm").innerHTML = document.getElementById("termOne").value;  
}
counter++;


}