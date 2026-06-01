// Efeito de entrada suave

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll(".card").forEach(card=>{
    card.classList.add("hidden");
    observer.observe(card);
});

// Contadores animados

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter,20);
        }else{
            counter.innerText = target;
        }
    };

    updateCounter();
});

// Parallax suave

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if(hero){
        hero.style.backgroundPositionY =
            window.pageYOffset * 0.4 + "px";
    }

});
CSS complementar para animações
.hidden{
    opacity:0;
    transform:translateY(40px);
    transition:all .8s ease;
}

.show{
    opacity:1;
    transform:translateY(0);
}
