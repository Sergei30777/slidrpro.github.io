const entities = [
  {
    text: "Rostov-on-Don, Admiral",
    text2: "3.5 months",
    text3: "81 m2",
    img: "imeges/hero2.jpg",
  },
  {
    text: "Sochi Thieves",
    text2: "4 months",
    text3: "105 m2",
    img: "imeges/Sla2.jpg",
  },
  {
    text: "Rostov-on-Don Patriotic",
    text2: "3 months ",
    text3: "93 m2",
    img: "imeges/Sla3.jpg",
  },
];

const text = document.querySelector(".text");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const img = document.querySelector(".slidImag");
const dot = document.querySelectorAll(".dot");
const ins = document.querySelectorAll(".ins");

const setEntity = (index) => {
  text.innerText = entities[index].text;
  text2.innerText = entities[index].text2;
  text3.innerText = entities[index].text3;
  img.style.backgroundImage = `url(${entities[index].img})`;
};

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let currentIndex = 0;

dot.forEach((item, itemDot) => {
  item.addEventListener("click", () => {
    currentIndex = itemDot;

    setdotinsActif(currentIndex);
  });
});

ins.forEach((item, itemDot) => {
  item.addEventListener("click", () => {
    currentIndex = itemDot;

    setdotinsActif(currentIndex);
  });
});

const setdotinsActif = () => {
  setEntity(currentIndex);
  dotActif(currentIndex);
  insActif(currentIndex);
};
const dotActif = (n) => {
  for (slideDot of dot) {
    slideDot.classList.remove("activ");
  }
  dot[n].classList.add("activ");
};

const insActif = (n) => {
  for (slideIns of ins) {
    slideIns.classList.remove("active");
  }
  ins[n].classList.add("active");
};

prev.addEventListener("click", () => {
  if (currentIndex == 0) {
    currentIndex = entities.length - 1;
    setEntity(currentIndex);
    dotActif(currentIndex);
  } else {
    currentIndex--;
    setEntity(currentIndex);
    dotActif(currentIndex);
  }
});
next.addEventListener("click", () => {
  if (currentIndex == entities.length - 1) {
    currentIndex = 0;
    setEntity(currentIndex);
    dotActif(currentIndex);
  } else {
    currentIndex++;
    setEntity(currentIndex);
    dotActif(currentIndex);
  }
});
