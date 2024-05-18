var totalPrice = document.getElementById("totalPrice");
var btnincrement = document.getElementById("increment");
var btndecrement = document.getElementById("decrement");
var quantity = document.getElementById("quantity");
var btndelete = document.getElementById("delete");
var btncoeur = document.getElementById("coeur");
var prixUnity = document.getElementById("prixUnity");

document.addEventListener("DOMContentLoaded", function () {
  totalPrice.textContent = quantity.textContent * prixUnity.textContent;
});

btnincrement.addEventListener("click", function () {
  quantity.textContent = Number(quantity.textContent) + 1;
  totalPrice.textContent = quantity.textContent * prixUnity.textContent;
});

btndecrement.addEventListener("click", function () {
  if (Number(quantity.textContent) > 0) {
    quantity.textContent = Number(quantity.textContent) - 1;
    totalPrice.textContent = quantity.textContent * prixUnity.textContent;
  }
});

btndelete.addEventListener("click", function () {
  quantity.textContent = 0;
  totalPrice.textContent = 0;
});

btncoeur.addEventListener("click", function () {
  if (btncoeur.style.color === "red") {
    btncoeur.style.color = "black";
  } else {
    btncoeur.style.color = "red";
  }
});
