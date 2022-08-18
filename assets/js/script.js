

let anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    let blockID = anchor.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

if (document.querySelector(".icon-menu")) {
  document.querySelector(".icon-menu").addEventListener("click", function (e) {
    document.querySelector("body").classList.toggle("lock");
    document.documentElement.classList.toggle("menu-open");
  });
}

// if (document.querySelector(".main__wrapper")) {
//   document.querySelector(".main__wrapper").addEventListener("click", function (e) {
//     document.querySelector("body").classList.toggle("lock");
//     document.documentElement.classList.toggle("menu-open");
//   });
// }

const mm = document.querySelector(".mm");
const form1 = document.querySelector(".request__form-mobile");
const form2 = document.querySelector(".request__form-mobile.two");
const formBtn = document.querySelector(".mobile__BTNtext");
const formBtn2 = document.querySelector(".mobile__BTNtext.two");
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((element) => {
  element.addEventListener("click", function (e) {
    document.querySelector("body").classList.remove("lock");
    document.documentElement.classList.remove("menu-open");
  });
});

mm.addEventListener("click", function (e) {
  document.querySelector("body").classList.remove("lock");
  document.documentElement.classList.remove("menu-open");
});

// navigation.addEventListener("click", function (e) {
//   document.querySelector("body").classList.remove("lock");
//   document.documentElement.classList.remove("menu-open");
// });

formBtn.addEventListener("click", function (e) {
  formBtn.classList.add("clicked");
  formBtn2.classList.remove("clicked");
  form2.classList.remove("active");
  form1.classList.add("active");
});
formBtn2.addEventListener("click", function (e) {
  formBtn2.classList.add("clicked");
  formBtn.classList.remove("clicked");
  form2.classList.add("active");
  form1.classList.remove("active");
});

//# sourceMappingURL=script.js.map


function myFunction() {
  var element = document.getElementsByClassName("service__wrap");
  element.classList.remove("slick-slide");
};
function myFunction() {
  var element = document.getElementsByClassName("service__wrap");
  element.classList.remove("slick-slide");
};




