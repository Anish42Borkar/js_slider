const carousalDom = document.querySelector(".carousel");
const listItemDom = document.querySelector(".carousel .list");
const thumbnailDom = document.querySelector(".carousel .thumbnail");

const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
let audio = new Audio();

let timeRunner = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun;

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  //   console.log(dataSound.dataset.sound);

  clearTimeout(runTimeOut);
  autoRunFun();
  if (type === "next") {
    const dataSound = itemSlider[1];
    const firstChild = itemSlider[0];
    const firstChildThumbnail = itemThumbnail[0];
    listItemDom.appendChild(firstChild);
    thumbnailDom.appendChild(firstChildThumbnail);
    carousalDom.classList.add("next");
    sound(dataSound.dataset.sound);
  } else {
    const dataSound = itemSlider[itemSlider.length - 1];
    const firstChild = itemSlider[itemSlider.length - 1];
    const firstChildThumbnail = itemThumbnail[itemThumbnail.length - 1];
    listItemDom.prepend(firstChild);
    thumbnailDom.prepend(firstChildThumbnail);
    carousalDom.classList.add("prev");
    sound(dataSound.dataset.sound);
  }

  setTimeout(() => {
    carousalDom.classList.remove("next");
    carousalDom.classList.remove("prev");
  }, 1000);
}

function autoRunFun() {
  runTimeOut = setInterval(() => {
    showSlider("next");
  }, timeAutoNext);
}

autoRunFun();

function sound(type) {
  audio.pause();
  switch (type) {
    case "whale":
      audio.src = "sound/whale.mp3";
      break;
    case "deer2":
      audio.src = "sound/deer2.mp3";
      break;
    case "elephant":
      audio.src = "sound/gajah.mp3";
      break;
    case "leopard":
      audio.src = "sound/leopard-attack.mp3";
      break;
    default:
  }

  audio.play();
}

function onClick(href) {
  console.log(href);
  window.open(href);
}

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("hii");
  sound("whale");

  nextBtn.onclick = function () {
    showSlider("next");
  };

  prevBtn.onclick = function () {
    showSlider("prev");
  };

  document.addEventListener("keydown", (e) => {
    if (
      carousalDom.classList.contains("next") ||
      carousalDom.classList.contains("prev")
    )
      return;
    if (e.key === "ArrowLeft") {
      showSlider("prev");
    } else if (e.key === "ArrowRight") {
      showSlider("next");
    }
  });

  /* 
    - Code to execute when only the HTML document is loaded.
    - This doesn't wait for stylesheets, 
      images, and subframes to finish loading. 
  */
});
