const today = new Date();
const huidigeDag = today.getDay();

if(huidigeDag >= 1 && huidigeDag <= 5){
    console.log("Ik moet naar school");
} else{
    console.log("Lekker uitslapen!");
}