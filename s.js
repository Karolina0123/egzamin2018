function wesele(){
let lg=document.getElementById("lg").value;
let pop=document.getElementById("poprawiny").checked;
let koszt=lg*100;
if(pop){
    let poprawiny=koszt*0.3;
    koszt+=poprawiny;
}
document.getElementById("wynik").innerHTML="Koszt twojego wesela to "+koszt+" złotych";
}
