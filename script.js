// SCROLL SUAVE DO MENU
const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(event){

        event.preventDefault();

        const sectionId = this.getAttribute("href");

        const section = document.querySelector(sectionId);

        if(section){
            section.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// PARTÍCULAS (POEIRA)
const particleContainer = document.querySelector(".particles");

if(particleContainer){

    for(let i = 0; i < 40; i++){

        const particle = document.createElement("span");

        const size = Math.random() * 4 + 2;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particle.style.left = Math.random() * 100 + "%";

        particle.style.animationDuration = (Math.random() * 10 + 5) + "s";

        particle.style.opacity = Math.random();

        particleContainer.appendChild(particle);

    }

}


// CINZAS CAINDO
const ashes = document.querySelector(".ashes");

if(ashes){

    for(let i = 0; i < 30; i++){

        const ash = document.createElement("span");

        ash.style.left = Math.random() * 100 + "%";

        ash.style.animationDuration = (Math.random() * 5 + 5) + "s";

        ash.style.opacity = Math.random();

        ashes.appendChild(ash);

    }

}
const elementos = document.querySelectorAll(".bloco");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

elementos.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});// SCROLL SUAVE DO MENU
const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(event){

        event.preventDefault();

        const sectionId = this.getAttribute("href");

        const section = document.querySelector(sectionId);

        if(section){
            section.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// PARTÍCULAS (POEIRA)
const particleContainer = document.querySelector(".particles");

if(particleContainer){

    for(let i = 0; i < 40; i++){

        const particle = document.createElement("span");

        const size = Math.random() * 4 + 2;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particle.style.left = Math.random() * 100 + "%";

        particle.style.animationDuration = (Math.random() * 10 + 5) + "s";

        particle.style.opacity = Math.random();

        particleContainer.appendChild(particle);

    }

}


// CINZAS CAINDO
const ashes = document.querySelector(".ashes");

if(ashes){

    for(let i = 0; i < 30; i++){

        const ash = document.createElement("span");

        ash.style.left = Math.random() * 100 + "%";

        ash.style.animationDuration = (Math.random() * 5 + 5) + "s";

        ash.style.opacity = Math.random();

        ashes.appendChild(ash);

    }

}
const elementos = document.querySelectorAll(".bloco");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

elementos.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});
    
