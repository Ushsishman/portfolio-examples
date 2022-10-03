/* NAVBAR RESPONSİVE PART */
const hamburgerIcon = document.getElementById("hamburger-menu-icon");
const responsiveNavbar = document.getElementById("responsive-navbar");
const closeBtnResponsive = document.getElementById("close-btn-responsive");
hamburgerIcon.addEventListener("click", () => {
  responsiveNavbar.classList.add("active-responsive");
});
closeBtnResponsive.addEventListener("click", () => {
  responsiveNavbar.classList.remove("active-responsive");
});
/* FEATURES PART */
const simpleBookmarking = document.getElementById("simple-bookmarking");
const speedySearching = document.getElementById("speedy-searching");
const easySharing = document.getElementById("easy-sharing");
const svgOne = document.getElementById("svg-part-one");
const expOne = document.getElementById("exp-part-one");
const svgTwo = document.getElementById("svg-part-two");
const expTwo = document.getElementById("exp-part-two");
const svgThree = document.getElementById("svg-part-three");
const expThree = document.getElementById("exp-part-three");
speedySearching.addEventListener("click", function () {
  speedySearching.classList.add("active1");
  simpleBookmarking.classList.remove("active1");
  easySharing.classList.remove("active1");
  svgTwo.classList.add("active2");
  expTwo.classList.add("active2");
  svgTwo.classList.remove("passive");
  expTwo.classList.remove("passive");
  svgOne.classList.add("passive");
  expOne.classList.add("passive");
  svgOne.classList.remove("active2");
  expOne.classList.remove("active2");
  expThree.classList.add("passive");
  expThree.classList.remove("active2");
  svgThree.classList.add("passive");
  svgThree.classList.remove("active2");
});
simpleBookmarking.addEventListener("click", function () {
  simpleBookmarking.classList.add("active1");
  speedySearching.classList.remove("active1");
  easySharing.classList.remove("active1");
  svgOne.classList.add("active2");
  expOne.classList.add("active2");
  svgOne.classList.remove("passive");
  expOne.classList.remove("passive");
  svgTwo.classList.add("passive");
  expTwo.classList.add("passive");
  svgTwo.classList.remove("active2");
  expTwo.classList.remove("active2");
  expThree.classList.add("passive");
  expThree.classList.remove("active2");
  svgThree.classList.add("passive");
  svgThree.classList.remove("active2");
});
easySharing.addEventListener("click", function () {
  easySharing.classList.add("active1");
  speedySearching.classList.remove("active1");
  simpleBookmarking.classList.remove("active1");
  svgOne.classList.add("passive");
  svgOne.classList.remove("active2");
  expOne.classList.add("passive");
  expOne.classList.remove("active2");
  svgTwo.classList.add("passive");
  svgTwo.classList.remove("active2");
  expTwo.classList.add("passive");
  expTwo.classList.remove("active2");
  svgThree.classList.add("active2");
  expThree.classList.add("active2");
  svgThree.classList.remove("passive");
  expThree.classList.remove("passive");
});
/* FAQ PART */
const test1 = document.getElementById("test");
const test2 = document.getElementById("test2");
const test3 = document.getElementById("test3");
const test4 = document.getElementById("test4");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

test1.addEventListener("click", () => {
  answer1.classList.toggle("answer-active");
});
test2.addEventListener("click", () => {
  answer2.classList.toggle("answer-active");
});
test3.addEventListener("click", () => {
  answer3.classList.toggle("answer-active");
});
test4.addEventListener("click", () => {
  answer4.classList.toggle("answer-active");
});
