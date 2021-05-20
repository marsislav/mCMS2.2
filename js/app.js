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
        transition: "0.5s",
        "margin-top":"-30px",
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
        transition: "0.5s",
        "margin-top":"unset",
      });
    }
  });
});

/*Mobile menu*/
  /* Mobile menu */
  $(".mobileMenu").click(function () {
    $(".mobileMenu").toggleClass("bi bi-x-lg");
    $(".mobileMenu").fadeToggle(200, "linear");
    $(".mobileMenu").css("display", "block");
  });
  /*Mobile menu - end */
/*END - Mobile menu*/
/*END - Resize header on scroll*/

/*Simple image Pop-up */
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


/*END - Simple image Pop-up */

/*Smooth  scroll*/
/*END - Smooth scroll*/
