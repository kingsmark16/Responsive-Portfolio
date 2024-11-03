var typed = new Typed(".typing", {
    strings: ["Web Designer", "Game Developer"],
    typeSpeed: 100,
    Backspeed: 60,
    loop: true
})
function showSuccessMessage() {
   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    alert("Your message has been sent successfully!");

    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("subject").value = '';
    document.getElementById("message").value = '';
}

const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length,
totalNavList = navList.length;
for(let i = 0; i < totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){

        removeBackSection();
        for(let j = 0; j <  totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                addBackSection(j);
                //allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }

        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200) {
            asideSectionToggleBtn();
        }
    })
}
function removeBackSection() {
    for(let i = 0; i < totalSection; i++){
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(element){
    for(let i = 0; i <  totalSection; i++){
        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element){
    for(let i = 0; i < totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[i]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");

    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navToggleBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");

navToggleBtn.addEventListener("click", () => {
    asideSectionToggleBtn();
})
function asideSectionToggleBtn(){
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
    for(let i = 0; i < totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}