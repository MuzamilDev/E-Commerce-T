let date = new Date();
let newtime = date.toLocaleString();
let header = document.getElementById("header");
header.innerHTML = newtime + " Welocme ";

let union = document.createElement("div");
document.body.appendChild(union);
union.setAttribute("id", "firstChalp");

let img_one_block = document.createElement("img");
img_one_block.setAttribute("class", "Blockimg");
img_one_block.src = "./images/pexels-cottonbro-4542854.jpg";
union.appendChild(img_one_block);

let boxB = document.getElementById("firstbox");
let btn_1 = document.getElementById("cemeronb");
btn_1.addEventListener("click", function (e) {
  boxB.classList.add("activeone");
  btn_1.classList.add("btnAnimi");
  console.log("active button");
});
boxB.addEventListener("animationend", function () {
  boxB.classList.add("activenotone");
});

let img_one = document.getElementById("img-first");
let img_two = document.getElementById("img-second");

btn_1.addEventListener("click", () => {
  setTimeout(() => {
    img_one.style.display = "block";
    img_two.style.display = "block";
  }, 3000);
});

let img_three = document.getElementById("img-third");
btn_1.addEventListener("click", () => {
  setTimeout(() => {
    img_three.style.display = "block";
  }, 5000);
});

let boxR = document.getElementById("secondbox");
let btn_2 = document.getElementById("wheatb");

btn_2.addEventListener("click", function () {
  boxR.classList.add("activetwo");
  btn_2.classList.add("btnAnimi");
});
boxR.addEventListener("animationend", function () {
  boxR.classList.add("activenottwo");
});

let img_left_one = document.getElementById("img-Lfirst");
let img_left_two = document.getElementById("img-Lsecond");
btn_2.addEventListener("click", () => {
  setTimeout(() => {
    img_left_one.style.display = "block";
    img_left_two.style.display = "block";
  }, 3000);
});

let img_left_three = document.getElementById("img-Lthird");
btn_2.addEventListener("click", () => {
  setTimeout(() => {
    img_left_three.style.display = "block";
  }, 5000);
});

let boxP = document.getElementById("thirdbox");
let btn_3 = document.getElementById("pinkb");

btn_3.addEventListener("click", function () {
  boxP.classList.add("activethree");
  btn_3.classList.add("btnAnimi");
});
boxP.addEventListener("animationend", function () {
  boxP.classList.add("activenotthree");
});

let childimgOne = document.getElementById("img-child1");
let childimgtwo = document.getElementById("img-child2");
btn_3.addEventListener("click", () => {
  setTimeout(() => {
    childimgOne.style.display = "block";
    childimgtwo.style.display = "block";
  }, 3000);
});
let childimgthree = document.getElementById("img-child3");
btn_3.addEventListener("click", () => {
  setTimeout(() => {
    childimgthree.style.display = "block";
  }, 5000);
});

let boxG = document.getElementById("fourthbox");
let btn_4 = document.getElementById("blueb");
btn_4.addEventListener("click", function () {
  boxG.classList.add("activefour");
  btn_4.classList.add("btnAnimi");
});
boxG.addEventListener("animationend", function () {
  boxG.classList.add("activenotfour");
});

let saleOne = document.getElementById("img-saleO");
let saleTwo = document.getElementById("img-saleT");
btn_4.addEventListener("click", () => {
  setTimeout(() => {
    saleOne.style.display = "block";
    saleTwo.style.display = "block";
  }, 3000);
});
let saleThree = document.getElementById("img-saleTh");
btn_4.addEventListener("click", () => {
  setTimeout(() => {
    saleThree.style.display = "block";
  }, 5000);
});

img_one.addEventListener("click", function (e) {
  e.preventDefault();
  if (union.style.visibility === "hidden") {
    union.style.visibility = "visible";
  } else {
    union.style.visibility = "hidden";
  }
});

let cart = [];
let total = 0;

// Function to add an item to the cart
function addToCart(productName, price) {
  // Add item to cart array
  cart.push({ name: productName, price: price });

  // Update total price
  total += price;

  // Display updated cart
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  cart.forEach((item, index) => {
    const itemSpan = document.createElement("span");
    itemSpan.innerText = `${item.name} - $${item.price}`;

    const removeButton = document.createElement("button");
    removeButton.setAttribute("class", "removebtn");
    removeButton.innerText = "Remove";
    removeButton.onclick = () => removeFromCart(index);

    itemSpan.appendChild(removeButton);
    cartDiv.appendChild(itemSpan);
  });

  document.getElementById("total").innerText = total;
}

// Function to remove an item from the cart
function removeFromCart(index) {
  // Update total price
  total -= cart[index].price;

  // Remove item from cart array
  cart.splice(index, 1);

  // Update cart display
  updateCartDisplay();
}

function checkForVisibility() {
  var headers = document.querySelectorAll(".header");
  headers.forEach(function (header) {
    if (isElementInViewport(header)) {
      header.classList.add("headerVisible");
    } else {
      header.classList.remove("headerVisible");
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}
