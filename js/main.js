var counter = 0;
var counterTwo = 0;
var counterThree = 0;
var counterFour = 0;
var counterFive = 0;

document.getElementById("submitOne").onclick = function noteCards (){
    document.getElementById("cardOneTerm").innerHTML = document.getElementById("termOne").value;
    counter = 0;
    }
document.getElementById("submitTwo").onclick = function noteCards (){
        document.getElementById("cardTwoTerm").innerHTML = document.getElementById("termTwo").value;
        counterTwo = 0;
        }
document.getElementById("submitThree").onclick = function noteCards (){
            document.getElementById("cardThreeTerm").innerHTML = document.getElementById("termThree").value;
            counterThree = 0;
            }
document.getElementById("submitFour").onclick = function noteCards (){
                document.getElementById("cardFourTerm").innerHTML = document.getElementById("termFour").value;
                counterFour = 0;
                }
document.getElementById("submitFive").onclick = function noteCards (){
                    document.getElementById("cardFiveTerm").innerHTML = document.getElementById("termFive").value;
                    counterFive = 0;
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
document.getElementById("cardTwoTerm").onclick = function flip (){
    if ((counterTwo%2) == 0){
        document.getElementById("cardTwoTerm").innerHTML = document.getElementById("definitionTwo").value  
    }
    else {
        document.getElementById("cardTwoTerm").innerHTML = document.getElementById("termTwo").value;  
    }
    counterTwo++;
    }
document.getElementById("cardThreeTerm").onclick = function flip (){
        if ((counterThree%2) == 0){
            document.getElementById("cardThreeTerm").innerHTML = document.getElementById("definitionThree").value  
        }
        else {
            document.getElementById("cardThreeTerm").innerHTML = document.getElementById("termThree").value;  
        }
        counterThree++;
        }
document.getElementById("cardFourTerm").onclick = function flip (){
            if ((counterFour%2) == 0){
                document.getElementById("cardFourTerm").innerHTML = document.getElementById("definitionFour").value  
            }
            else {
                document.getElementById("cardFourTerm").innerHTML = document.getElementById("termFour").value;  
            }
            counterFour++;
            }
document.getElementById("cardFiveTerm").onclick = function flip (){
                if ((counterFive%2) == 0){
                    document.getElementById("cardFiveTerm").innerHTML = document.getElementById("definitionFive").value  
                }
                else {
                    document.getElementById("cardFiveTerm").innerHTML = document.getElementById("termFive").value;  
                }
                counterFive++;
                }
$(document).ready(function() {
                    var hide = $('#hideMe');
$('#hideMeButton').on('click', function() {
                hide.fadeToggle();  
            });
        });
