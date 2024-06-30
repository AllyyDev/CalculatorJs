// Holen die Display von der HTML-Datei
const DISPLAY = document.getElementById("display");


function display(inp) { // Die Display Eingabe wird hergestellt
    DISPLAY.value += inp;
}

function clearDisp() { // Die Löschfunktion 
    DISPLAY.value = "";
}

function calculate() { // Die Rechenfunktion
    try{
        DISPLAY.value = eval(DISPLAY.value); // eval() wertet den Wert auf dem Display aus
    } catch(error) { // Im falle man gibt einen ungültigen Input ein (Beispiel: 4 +- 3 oder 4 +)
        DISPLAY.value = "Error";
    }
}