const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})

$("[data-toggle='toggle']").click(function() {
    var selector = $(this).data("target");
    $(selector).toggleClass('in');
});


const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
  // console.log(e)
});
window.addEventListener("scroll", () => {
  const fromTop = cursor.getAttribute("data-fromTop");
  cursor.style.top = scrollY + parseInt(fromTop) + "px";
});
window.addEventListener("click", () => {
  if (cursor.classList.contains("click")) {
    cursor.classList.remove("click");
    void cursor.offsetWidth; // trigger a DOM reflow
    cursor.classList.add("click");
  } else {
    cursor.classList.add("click");
  }
});

// *********************
// This Code is for only the floating card in right bottom corner
// **********************
const icon = document.querySelector(".icon");
const nav = document.querySelector("nav");

icon.addEventListener("click", () => {
  icon.classList.toggle("close");
  nav.classList.toggle("show");
});

// *********************
// This Code is for only the floating card in right bottom corner
// **********************

// const touchButton = document.querySelector(".float-text");
// const card = document.querySelector(".float-card-info");
// const close = document.querySelector(".gg-close-r");

// touchButton.addEventListener("click", moveCard);
// close.addEventListener("click", moveCard);

// function moveCard() {
//   card.classList.toggle("active");
// }

$(function() {
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });
});



var Scrollbar = window.Scrollbar;

  Scrollbar.init(document.querySelector('#my-scrollbar'), options);



