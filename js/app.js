/*!
 * mCMS 2.2 default template. For more details - https://marsislav.net, https://web-agency.org
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
/*Resize header on scroll*/
$(function () {
  var header = $("header");
  var logo = $("header .logoImg");
  var navbar = $(".navbar-nav");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 170) {
      header.css({
        "background-color": "#FF7900",
        //"font-size": "26px",
        transition: "0.5s",
        height: "70px",
        "box-shadow": "0 4px 10px -2px gray",
      });
      logo.css({
        height: "60px",
        transition: "0.5s",
      });
      navbar.css({
        margin: "4% 0 0 0",
        transition: "0.5s",
      });
    } else {
      header.css({
        "background-color": "#80C31C",
        transition: "0.5s",
        height: "120px",
        "box-shadow": "0 4px 10px -2px gray",
      });
      logo.css({
        height: "110px",
      });
      navbar.css({
        margin: "13% 0 0 0",
        transition: "0.5s",
      });
    }
  });
});
/*END - Resize header on scroll*/

/*Simple image Pop-up */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < handlerOpenModal.length; i++) {
  handlerOpenModal[i].addEventListener('click', openModal);

  handlerCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}
document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*END - Simple image Pop-up */

/*Smooth  scroll*/
/*END - Smooth scroll*/
