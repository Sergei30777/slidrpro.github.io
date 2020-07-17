const schouprevBtn = document.getElementById("prev");
const schounextBtn = document.getElementById("next");
const slideDot = document.querySelectorAll(".dot");
const slideIns = document.querySelectorAll(".ins");
let index = 0;
const texUrls = ["Rostov-on-Don,<br> Admiral ", " Sochi Thieves", "Rostov-on-Don Patriotic"];
let text = document.querySelector(".text"),
  te = texUrls[index];
text.innerHTML = texUrls[index];

let imegesUrls = [];
imegesUrls.push("imeges/hero2.jpg");
imegesUrls.push("imeges/Sla2.jpg");
imegesUrls.push("imeges/Sla3.jpg");

const slidimg = document.querySelector(".slidImag");
const slidtext = document.querySelector(".text");
slidimg.src = imegesUrls[index];

const texUrls1 = ["3.5 months", "4 months ", " 3 months "];
let text1 = document.querySelector(".text1"),
  te1 = texUrls1[index];
text1.innerHTML = texUrls1[index];

const texUrls2 = ["81 m2", "105 m2 ", " 93 m2"];
let text2 = document.querySelector(".text2"),
  te2 = texUrls2[index];
text2.innerHTML = texUrls2[index];

function textALL() {
  te = texUrls[index];
  text.innerHTML = texUrls[index];
  te1 = texUrls1[index];
  text1.innerHTML = texUrls1[index];
  te2 = texUrls2[index];
  text2.innerHTML = texUrls2[index];
  dotActif(index);
  insActif(index);
}

slideDot.forEach((item, itemDot) => {
  item.addEventListener("click", () => {
    index = itemDot;
    slidimg.src = imegesUrls[index];
    textALL(index);
  });
});

slideIns.forEach((item, itemDot) => {
  item.addEventListener("click", () => {
    index = itemDot;
    slidimg.src = imegesUrls[index];
    textALL(index);
  });
});

const dotActif = (n) => {
  for (dot of slideDot) {
    dot.classList.remove("activ");
  }
  slideDot[n].classList.add("activ");
};

const insActif = (n) => {
  for (ins of slideIns) {
    ins.classList.remove("active");
  }
  slideIns[n].classList.add("active");
};

function oncliprev(e) {
  if (index == 0) {
    index = imegesUrls.length - 1;
    ;
    slidimg.src = imegesUrls[index];
    textALL(index);
  } else {
    index--;
    slidimg.src = imegesUrls[index];
    textALL(index);
  }
}

function onclinext(e) {
  if (index === imegesUrls.length - 1) {
    index = 0;
    slidimg.src = imegesUrls[index];
    textALL(index);
  } else {
    index++;
    slidimg.src = imegesUrls[index];

    textALL(index);
  }
}

schouprevBtn.addEventListener("click", oncliprev);
schounextBtn.addEventListener("click", onclinext);
