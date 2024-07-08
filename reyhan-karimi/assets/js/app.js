// import { data, menData, womenData, kidsData } from "../..//utils/data.js";
// import { createElementRepo } from "../..//utils/domUtils.js";
// import {
//   saveToLocalStorage,
//   getFromLocalStorage,
// } from "../../utils/storageUtils.js";
// const headerData = data.slice(0, 5);
// console.log(headerData);
// console.log(menData);
// console.log(womenData);
// console.log(kidsData);

document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".left-img-right");
  const parentImg = document.querySelector(".container-img2");
  const text2 = document.querySelector(".text2");
  const text22 = document.querySelector(".text22");

  parentImg.style.position = "relative";

  img.addEventListener("mouseenter", () => {
    text2.classList.add("hidden");
    text22.classList.add("hidden");

    const newDiv = document.createElement("div");
    newDiv.style.position = "absolute";
    newDiv.style.width = "270px";
    newDiv.style.height = "230px";
    newDiv.style.margin = "0.8rem";
    newDiv.style.bottom = "1rem";
    newDiv.style.backgroundColor = "#343a40";
    newDiv.style.opacity = "0";
    newDiv.style.transition = "opacity 2s ease-in-out";
    newDiv.style.top = "0";
    newDiv.style.left = "0";
    newDiv.classList.add("hover-div");
    parentImg.append(newDiv);

    const textInDiv = document.createElement("div");
    textInDiv.textContent = "Women";
    textInDiv.style.fontSize = "27px";
    textInDiv.style.fontWeight = "600";
    textInDiv.style.position = "absolute";
    textInDiv.style.top = "50%";
    textInDiv.style.left = "50%";
    textInDiv.style.transform = "translate(-50%, -50%)";
    textInDiv.style.color = "white";
    newDiv.append(textInDiv);

    setTimeout(() => {
      newDiv.style.opacity = "0.9";
    }, 20);
  });

  img.addEventListener("mouseout", () => {
    const hoverDiv = document.querySelector(".hover-div");
    if (hoverDiv) {
      hoverDiv.style.opacity = "0";
      text2.classList.remove("hidden");
      text22.classList.remove("hidden");
      setTimeout(() => {
        if (hoverDiv && hoverDiv.style.opacity === "0") {
          hoverDiv.remove();
        }
      }, 200);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".left-img-right2");
  const parentImg = document.querySelector(".container-img22");
  const text2 = document.querySelector(".text2");
  const text22 = document.querySelector(".text22");

  parentImg.style.position = "relative";

  img.addEventListener("mouseenter", () => {
    text2.classList.add("hidden");
    text22.classList.add("hidden");

    const newDiv = document.createElement("div");
    newDiv.style.position = "absolute";
    newDiv.style.width = "270px";
    newDiv.style.height = "230px";
    newDiv.style.margin = "0.8rem";
    newDiv.style.bottom = "1rem";
    newDiv.style.backgroundColor = "#343a40";
    newDiv.style.opacity = "0";
    newDiv.style.transition = "opacity 0.2s ease-in-out";
    newDiv.style.top = "0";
    newDiv.style.left = "0";
    newDiv.classList.add("hover-div");
    parentImg.append(newDiv);

    const textInDiv = document.createElement("div");
    textInDiv.textContent = "Women";
    textInDiv.style.fontSize = "27px";
    textInDiv.style.fontWeight = "600";
    textInDiv.style.position = "absolute";
    textInDiv.style.top = "50%";
    textInDiv.style.left = "50%";
    textInDiv.style.transform = "translate(-50%, -50%)";
    textInDiv.style.color = "white";
    newDiv.append(textInDiv);

    setTimeout(() => {
      newDiv.style.opacity = "0.9";
    }, 20);
  });

  img.addEventListener("mouseleave", () => {
    const hoverDiv = document.querySelector(".hover-div");
    if (hoverDiv) {
      hoverDiv.style.opacity = "0";
      text2.classList.remove("hidden");
      text22.classList.remove("hidden");
      setTimeout(() => {
        if (hoverDiv && hoverDiv.style.opacity === "0") {
          hoverDiv.remove();
        }
      }, 200);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".left-img-right3");
  const parentImg = document.querySelector(".container-img3");
  const text2 = document.querySelector(".text2");
  const text22 = document.querySelector(".text22");

  parentImg.style.position = "relative";

  img.addEventListener("mouseenter", () => {
    text2.classList.add("hidden");
    text22.classList.add("hidden");

    const newDiv = document.createElement("div");
    newDiv.style.position = "absolute";
    newDiv.style.width = "270px";
    newDiv.style.height = "230px";
    newDiv.style.margin = "0.8rem";
    newDiv.style.bottom = "1rem";
    newDiv.style.backgroundColor = "#343a40";
    newDiv.style.opacity = "0";
    newDiv.style.transition = "opacity 0.2s ease-in-out";
    newDiv.style.top = "0";
    newDiv.style.left = "0";
    newDiv.classList.add("hover-div");
    parentImg.append(newDiv);

    const textInDiv = document.createElement("div");
    textInDiv.textContent = "Women";
    textInDiv.style.fontSize = "27px";
    textInDiv.style.fontWeight = "600";
    textInDiv.style.position = "absolute";
    textInDiv.style.top = "50%";
    textInDiv.style.left = "50%";
    textInDiv.style.transform = "translate(-50%, -50%)";
    textInDiv.style.color = "white";
    newDiv.append(textInDiv);

    setTimeout(() => {
      newDiv.style.opacity = "0.9";
    }, 20);
  });

  img.addEventListener("mouseleave", () => {
    const hoverDiv = document.querySelector(".hover-div");
    if (hoverDiv) {
      hoverDiv.style.opacity = "0";
      text2.classList.remove("hidden");
      text22.classList.remove("hidden");
      setTimeout(() => {
        if (hoverDiv && hoverDiv.style.opacity === "0") {
          hoverDiv.remove();
        }
      }, 200);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".left-img-right4");
  const parentImg = document.querySelector(".container-igm4");
  const text2 = document.querySelector(".text2");
  const text22 = document.querySelector(".text22");

  parentImg.style.position = "relative";

  img.addEventListener("mouseenter", () => {
    text2.classList.add("hidden");
    text22.classList.add("hidden");

    const newDiv = document.createElement("div");
    newDiv.style.position = "absolute";
    newDiv.style.width = "270px";
    newDiv.style.height = "230px";
    newDiv.style.margin = "0.8rem";
    newDiv.style.bottom = "1rem";
    newDiv.style.backgroundColor = "#343a40";
    newDiv.style.opacity = "0";
    newDiv.style.transition = "opacity 0.2s ease-in-out";
    newDiv.style.top = "0";
    newDiv.style.left = "0";
    newDiv.classList.add("hover-div");
    parentImg.append(newDiv);

    const textInDiv = document.createElement("div");
    textInDiv.textContent = "Women";
    textInDiv.style.fontSize = "27px";
    textInDiv.style.fontWeight = "600";
    textInDiv.style.position = "absolute";
    textInDiv.style.top = "50%";
    textInDiv.style.left = "50%";
    textInDiv.style.transform = "translate(-50%, -50%)";
    textInDiv.style.color = "white";
    newDiv.append(textInDiv);

    setTimeout(() => {
      newDiv.style.opacity = "0.9";
    }, 20);
  });

  img.addEventListener("mouseleave", () => {
    const hoverDiv = document.querySelector(".hover-div");
    if (hoverDiv) {
      hoverDiv.style.opacity = "0";
      text2.classList.remove("hidden");
      text22.classList.remove("hidden");
      setTimeout(() => {
        if (hoverDiv && hoverDiv.style.opacity === "0") {
          hoverDiv.remove();
        }
      }, 200);
    }
  });
});
