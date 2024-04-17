// select dom node
let btn = document.querySelector("button");
let spring = document.getElementById("spring");
let summer = document.getElementById("summer");

// function
function changeImage() {
  let springSrc = spring.getAttribute("src");
  let summerSrc = summer.getAttribute("src");
  //   change
  summer.setAttribute("src", springSrc);
  spring.setAttribute("src", summerSrc);
}

// event
btn.addEventListener("mouseenter", changeImage);
