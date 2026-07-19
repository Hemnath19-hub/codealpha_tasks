const display = document.getElementById("display");

function appendToDisplay(value){
    display.value += value;
    display.scrollLeft= display.scrollWidth;
}

function clearDisplay(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0,-1);
    display.scrollLeft= display.scrollWidth;
}

function calculate(){
    try {
        if(display.value === ""){return;}
        display.value = eval(display.value);
        display.scrollLeft= display.scrollWidth;
    } 
    catch (error) {
        display.value = "Error";
        setTimeout(() => {
            clearDisplay();
        }, 1000);
    }
}

document.addEventListener("keydown", e => {
    const key= e.key;
    if(key >= 0 && key <=9){
        appendToDisplay(key);
    }
    else if(key ==='+' || key ==='-' || key ==='*' || key ==='/' || key ==='.' || key ==='(' || key ===')'){
        appendToDisplay(key);
    }
    else if(key ==='Backspace'){
        backspace();
    }
    else if(key ==='Delete' || key ==='Escape'){
        clearDisplay();
    }
    else if(key ==='Enter'){
        e.preventDefault();
        calculate();
    }
    
})
function theme(){
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme",document.body.classList.contains("dark-mode")? "dark": "light");
}

function changeColor(color,button){

    let clrBtn= document.querySelectorAll(".color-buttons button");
    clrBtn.forEach(btn =>{
        btn.classList.remove("active");
    });

    button.classList.add("active");

    const style = document.body.style;
    switch(color){
        case "blue":
            style.setProperty("--main-bg", "linear-gradient(130deg, rgba(3, 4, 94, 1), rgba(0, 0, 16, 1))");
            style.setProperty("--opBtn1-bg", "rgba(3, 4, 94, 1)");
            style.setProperty("--opBtn1-color", "rgba(0, 119, 182, 1)");
            style.setProperty("--opBtn1-hover-bg", "rgb(3, 4, 60)");
            style.setProperty("--opBtn2-color", "rgb(4, 6, 130)");
            style.setProperty("--eqBtn-bg", "rgba(0, 119, 182, 1)");
            style.setProperty("--eqBtn-color", "rgba(255, 255, 255, 1)");
            style.setProperty("--eqBtn-hover-bg", "rgb(0, 95, 139)");
            style.setProperty("--copyright","rgba(255, 255, 255, 1)") ;
            break;
            
        case "green":
            style.setProperty("--main-bg", "linear-gradient(130deg, rgba(20, 54, 1, 1), rgba(0, 0, 16, 1))");
            style.setProperty("--opBtn1-bg", "rgba(20, 54, 1, 1)");
            style.setProperty("--opBtn1-color", "rgba(83, 141, 34, 1)");
            style.setProperty("--opBtn1-hover-bg", "rgb(14, 35, 1)");
            style.setProperty("--opBtn2-color", "rgb(83, 141, 34)");
            style.setProperty("--eqBtn-bg", "rgba(83, 141, 34, 1)");
            style.setProperty("--eqBtn-color", "rgba(255, 255, 255, 1)");
            style.setProperty("--eqBtn-hover-bg", "rgb(61, 103, 27)");
            style.setProperty("--copyright","rgba(255, 255, 255, 1)") ;
            break;

        case "red":
            style.setProperty("--main-bg", "linear-gradient(130deg, rgb(79, 5, 7), rgba(0, 0, 16, 1))");
            style.setProperty("--opBtn1-bg", "rgba(84, 11, 14, 1)"); 
            style.setProperty("--opBtn1-color", "rgba(232, 93, 4, 1)");
            style.setProperty("--opBtn1-hover-bg", "rgb(64, 8, 10)");
            style.setProperty("--opBtn2-color", "rgb(232, 93, 4)");
            style.setProperty("--eqBtn-bg", "rgba(232, 93, 4, 1)");
            style.setProperty("--eqBtn-color", "rgba(255, 255, 255, 1)");
            style.setProperty("--eqBtn-hover-bg", "rgb(175, 70, 5)");
            style.setProperty("--copyright","rgba(255, 255, 255, 1)") ;
            break;

        case "yellow":
            style.setProperty("--main-bg", "linear-gradient(130deg, rgb(255, 218, 10), rgba(0, 0, 16, 1))");
            style.setProperty("--opBtn1-bg", "rgb(253, 223, 50)");
            style.setProperty("--opBtn1-color", "rgb(254, 254, 205)");
            style.setProperty("--opBtn1-hover-bg", "rgb(182, 156, 11)");
            style.setProperty("--opBtn2-color", "rgb(238, 255, 0)");
            style.setProperty("--eqBtn-bg", "rgb(238, 255, 0)");
            style.setProperty("--eqBtn-color", "rgb(0, 0, 0)");
            style.setProperty("--eqBtn-hover-bg", "rgb(218, 218, 117)");
            style.setProperty("--copyright","rgba(255, 255, 255, 1)") ;
            break;
        
        case "default":
            style.removeProperty("--main-bg");
            style.removeProperty("--opBtn1-bg");
            style.removeProperty("--opBtn1-color");
            style.removeProperty("--opBtn1-hover-bg");
            style.removeProperty("--opBtn2-color");
            style.removeProperty("--eqBtn-bg");
            style.removeProperty("--eqBtn-color");
            style.removeProperty("--eqBtn-hover-bg");
            style.removeProperty("--copyright")
    }
    localStorage.setItem("changeColor", color);
}

const savedTheme = localStorage.getItem("theme");
if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
}

const savedColor = localStorage.getItem("changeColor");
if(savedColor){
    changeColor(savedColor);
}