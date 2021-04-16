
/* ==========================================================================
                                WHATSAPP BUTTON
========================================================================== */

popupWhatsApp = () => {
  
  let btnClosePopup = document.querySelector('.closePopup');
  let btnOpenPopup = document.querySelector('.whatsapp-button');
  let popup = document.querySelector('.popup-whatsapp');
  let sendBtn = document.getElementById('send-btn');

  btnClosePopup.addEventListener("click",  () => {
    popup.classList.toggle('is-active-whatsapp-popup')
  })
  
  btnOpenPopup.addEventListener("click",  () => {
    popup.classList.toggle('is-active-whatsapp-popup')
     popup.style.animation = "fadeIn .6s 0.0s both";
  })
  
  sendBtn.addEventListener("click", () => {
  let msg = document.getElementById('whats-in').value;
  let relmsg = msg.replace(/ /g,"%20");
     
   window.open('https://wa.me/3208973325?text=Hola!+quisiera+más+información+sobre+sus+servicios.'+relmsg, '_blank'); 
  
  });

  setTimeout(() => {
    popup.classList.toggle('is-active-whatsapp-popup');
  }, 250000);
}

popupWhatsApp();




/* ==========================================================================
                            SCROOLL REVEAL SCRIPT
========================================================================== */

window.sr = ScrollReveal();

    sr.reveal('.navbar', {
      duration: 3000,
      origin: 'bottom'
    });

    sr.reveal('.container', {
      duration: 2000,
      origin: 'bottom',
      distance: '300px'
    });

    sr.reveal('.header-btn', {
      duration: 2000,
      delay: 1000, 
      origin: 'bottom'
    });

    sr.reveal('.containermi', {
      duration: 3000,
      origin: 'left',
      distance: '300px',
      viewFactor: 0.2
    });

    sr.reveal('.containermi1', {
      duration: 3000,
      origin: 'right',
      distance: '300px',
      viewFactor: 0.2
    });
    sr.reveal('.todoservicio', {
      duration: 2000,
      origin: 'bottom',
      distance: '300px',
      viewFactor: 0.2
    });

    sr.reveal('.galeria', {
      duration: 2000,
      origin: 'bottom',
      distance: '300px',
      viewFactor: 0.2
    });

    sr.reveal('.video-responsive', {
      duration: 2000,
      origin: 'bottom',
      distance: '300px',
      viewFactor: 0.2
    });

    sr.reveal('.rsociales', {
      duration: 2000,
      origin: 'bottom',
      distance: '300px',
      viewFactor: 0.2
    });

    sr.reveal('#contact', {
      duration: 1500,
      origin: 'bottom',
      distance: '300px',
      viewFactor: 0.2
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
