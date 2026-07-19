let images= document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let current = 0;

function openlightbox(src){
    document.body.style.overflow="hidden";
    images = [...document.querySelectorAll(".image img")].filter(img =>
        img.parentElement.style.display !== "none");

    lightboxImg.src = src;
    lightbox.style.display = "flex";

    images.forEach((img, index) =>{
        if(img.src == src){
            current = index;
        }
    });
    updateBtn();
}

function closeLightbox(){
    document.body.style.overflow="auto";
    lightbox.style.display = "none";
}

document.addEventListener("keydown", e =>{
    if(lightbox.style.display !== "flex"){
        return;
    }
    if(e.key === "Escape"){
        closeLightbox();
    }
    if(e.key === "ArrowLeft"){
        changeimage(-1);
    }
    if(e.key === "ArrowRight"){
        changeimage(1);
    }
});

lightbox.addEventListener("click", e =>{
    if(e.target === lightbox){
        closeLightbox();
    }
});

const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");

function changeimage(direction){
    current += direction;
    if(current < 0){
        current = 0;
    }
    if(current >= images.length){
        current = images.length - 1;
    }
    lightboxImg.src= images[current].src;
    updateBtn();
}

function updateBtn(){
    if(current=== 0){
        prev.style.pointerEvents= "none"
        prev.style.opacity = "0.1";
        prev.style.cursor = "default";
    }else{
        prev.style.pointerEvents= "auto"
        prev.style.opacity = "1";
        prev.style.cursor = "pointer";
    }
    if(current == images.length- 1){
        next.style.pointerEvents= "none"
        next.style.opacity = "0.1";
        next.style.cursor = "default";
    }else{
        next.style.pointerEvents= "auto"
        next.style.opacity = "1";
        next.style.cursor = "pointer";
    }
    
}
function filterselection(category,Btn){
    let items= document.querySelectorAll(".image");
    items.forEach(item=>{
        if(category==="all"){
            item.style.display="block";
        }else{
            if(item.classList.contains(category)){
                item.style.display="block";
            }else{
                item.style.display="none";
            }
        }
    });
    let buttons = document.querySelectorAll(".filter-buttons button");
    buttons.forEach(button =>{
        button.classList.remove("active");
    });
    Btn.classList.add("active");
}
function theme(){
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme",document.body.classList.contains("dark-mode")? "dark": "light");
}
const savedTheme = localStorage.getItem("theme");
if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
}