const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
    if(this.window.scrollY == 0){
        header.classList.toggle("sticky");
    }
}
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
}

const sr = ScrollReveal ({
    distance: "25px",
    duration: 1500,
    reset: true
})

sr.reveal(".home-text, .home-image", {delay:190, origin:"bottom"})
sr.reveal(".about,.services,.portfolio,.contact", {delay:200, origin:"bottom"})



document.getElementById('filter-button').addEventListener('click', function() {
    // Získání vybraných hodnot z filtrů
    const selectedCity = document.getElementById('city-filter').value;
    const selectedSubject = document.getElementById('subject-filter').value;

    // Získání všech řádků tabulky
    const rows = document.querySelectorAll('#lessons-body tr');

    rows.forEach(row => {
        // Získání datových buněk pro město a předmět
        const city = row.cells[2].innerText;
        const subject = row.cells[1].innerText;

        // Logika filtrování: řádky, které neodpovídají kritériím, se skryjí
        if ((selectedCity === 'all' || city === selectedCity) &&
            (selectedSubject === 'all' || subject === selectedSubject)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
