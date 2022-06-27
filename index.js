"use strict";
//for search field
let s = document.querySelector(".search_input");

s.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  // console.log(term);
  const origin = document.getElementsByClassName("wrapper");

  console.log(origin);
  var list = [];

  Array.from(origin).forEach(function (book) {
    let shipment_id = book.children[0].children[0].children[1].innerText;

    let origin_name =
      book.children[1].children[0].children[1].children[1].innerText;

    let destination_name =
      book.children[1].children[1].children[1].children[1].innerText;
    list.push({ shipment_id, origin_name, destination_name });
  });
  console.log(list);
  var indexes = [];
  list.filter((e, i) => {
    if (
      e.shipment_id === s.value ||
      e.origin_name === s.value ||
      e.destination_name === s.value ||
      s.value === ""
    ) {
      indexes.push(i);
      origin[i].style.display = "block";
    } else {
      origin[i].style.display = "none";
    }
  });
  //console.log(indexes);
});

//for 6 boxes color change
let boxes = document.querySelectorAll(".options_list");

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    boxes.forEach((btn) => btn.classList.remove("color"));
    this.classList.add("color");
  });
});

//for inbound ,outbound...color change
let list = document.querySelectorAll(".inbound_list");
list.forEach((b) => {
  b.addEventListener("click", function () {
    list.forEach((val) => val.classList.remove("active"));
    this.classList.add("active");
  });
});

//mobile menu
let hamburger = document.getElementById("toggle_hamburger");
let menu_close = document.getElementById("menu_close");
let menuItem = document.querySelector(".Mobile_menu");
const section = document.querySelector(".container");
hamburger.addEventListener("click", () => {
  menuItem.classList.toggle("show");
  hamburger.style.display = "none";
  section.style.display = "none";
  menu_close.style.display = "block";
});
menu_close.addEventListener("click", () => {
  menuItem.classList.remove("show");
  hamburger.style.display = "block";
  section.style.display = "block";
  menu_close.style.display = "none";
});

function myFunction() {
  var x = document.getElementsByClassName("header_list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//inbound ,outbound scrolling
const cards = document.querySelectorAll(".action");
let prev = document.getElementById("previous");
let next = document.getElementById("next");
let left = 0;
let card_size = 103;
let total_card_size = cards.length * card_size - card_size * 1;
console.log(total_card_size);
next.onclick = () => {
  left = left + card_size;
  if (left >= total_card_size) left = total_card_size;
  console.log(left);
  moveCards(left);
  checkVisibility(left);
};
// function moveCards(left) {
//   for (let action of cards) {
//     action.style.left = left + "%";
//   }
// }
prev.onclick = () => {
  left -= card_size;
  if (left <= 0) left = 0;
  console.log(left);
  moveCards(left);
  checkVisibility(left);
};
prev.style.opacity = 0;

function moveCards(left) {
  for (let action of cards) {
    action.style.left = -left + "%";
  }
}
function checkVisibility(pos) {
  if (pos == 0) {
    prev.style.opacity = 0;
  } else {
    prev.style.opacity = 1;
  }
  if (pos >= total_card_size) {
    next.style.opacity = 0;
  } else {
    next.style.opacity = 1;
  }
}

//all ,delayed arrows
const options = document.querySelectorAll(".options_list");
let start = document.querySelector("#start_carousal");
let end = document.querySelector("#end_carousal");
let leftt = 0;
let option_size = 10;
let total_option_size = option_size * option_size - option_size * 4;
console.log(total_option_size);
end.onclick = () => {
  leftt = leftt + option_size;
  if (leftt >= total_option_size) leftt = total_option_size;
  console.log(leftt);
  moveOptions(leftt);
  checkArrowVisibility(leftt);
};
function moveOptions(leftt) {
  for (let options_list of options) {
    options_list.style.left = -leftt + "%";
  }
}
start.onclick = () => {
  leftt = leftt - option_size;
  if (leftt <= 0) leftt = 0;
  console.log(leftt);
  moveOptions(leftt);
  checkArrowVisibility(leftt);
};
start.style.opacity = 0;
function checkArrowVisibility(pos) {
  if (pos == 0) {
    start.style.opacity = 0;
  } else {
    start.style.opacity = 1;
  }
  if (pos >= total_option_size) {
    end.style.opacity = 0;
  } else {
    end.style.opacity = 1;
  }
}
