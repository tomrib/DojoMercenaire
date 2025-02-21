document.addEventListener('DOMContentLoaded', function () {
    const boutons = document.querySelectorAll('.boutonHome button');
    const contenus = document.querySelectorAll('.contenu');

    boutons.forEach(bouton => {
        bouton.addEventListener('click', function () {
            const idContenu = "contenu" + this.id.replace('bouton', '');

            contenus.forEach(contenu => contenu.classList.remove('active'));
            boutons.forEach(btn => btn.classList.remove('active'));

            document.getElementById(idContenu).classList.add('active');
            this.classList.add('active');
        });
    });

    const tankButtons = document.querySelectorAll('#tank1, #tank2, #tank3, #tank4, #tank5, #tank6');
    const tankContents = document.querySelectorAll('.boxTank');

    tankButtons.forEach(button => {
        button.addEventListener('click', function () {
            const idContenu = "boxTank" + this.id.replace('tank', '');

            tankContents.forEach(content => content.classList.remove('active'));
            tankButtons.forEach(btn => btn.classList.remove('active'));

            document.getElementById(idContenu).classList.add('active');
            this.classList.add('active');
        });
    });
    const iframe = document.getElementById('monIframe');
    const urlOrigine = iframe.src; // URL d'origine du iframe
  
    // Écouter les clics sur le document
    document.addEventListener('click', function(event) {
      // Vérifier si le clic est à l'extérieur de l'iframe
      if (!iframe.contains(event.target)) {
        // Mettre à jour l'URL de la page principale
        window.history.pushState(null, null, urlOrigine);
      }
    });
  
    // Intercepter les clics sur les liens dans le iframe (pour garder l'URL à jour pendant la navigation dans le iframe)
    iframe.contentWindow.document.addEventListener('click', function(event) {
      const lien = event.target.closest('a');
      if (lien) {
        event.preventDefault();
  
        const nouvelleURL = lien.href;
        window.history.pushState(null, null, nouvelleURL);
  
        iframe.src = nouvelleURL;
      }
    });
    
});
const carousel = document.querySelector('.carousel');
const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentPosition = 0;
let slideWidth;
const numSlides = document.querySelectorAll('.slide').length;

function updateSlideWidth() {
    slideWidth = document.querySelector('.slide').offsetWidth;
}

updateSlideWidth();

nextButton.addEventListener('click', () => {
    currentPosition = (currentPosition + 1) % numSlides;
    slides.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
});

prevButton.addEventListener('click', () => {
    currentPosition = (currentPosition - 1 + numSlides) % numSlides;
    slides.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
});

window.addEventListener('resize', () => {
    updateSlideWidth();
    slides.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
});

window.addEventListener('DOMContentLoaded', () => {
    updateSlideWidth();
    slides.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
});